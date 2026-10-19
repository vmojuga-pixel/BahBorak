// src/api/whatsapp.js
// Minimal WhatsApp webhook + outbox dispatch stubs
// - webhook verification (GET challenge)
// - inbound webhook event processing (POST)
// - outbox table enqueueing
// - dispatch endpoint to send queued messages (uses WHATSAPP_API_URL + WHATSAPP_API_TOKEN)

import { randomUUID } from "crypto";

export async function handleWhatsAppWebhook(request, env) {
  // GET verification (Meta-style)
  if (request.method === "GET") {
    const url = new URL(request.url);
    const mode = url.searchParams.get("hub.mode");
    const token = url.searchParams.get("hub.verify_token");
    const challenge = url.searchParams.get("hub.challenge");
    if (mode && token && challenge && token === env.WHATSAPP_VERIFY_TOKEN) {
      return new Response(challenge, { status: 200 });
    }
    return new Response("Invalid verification", { status: 403 });
  }

  // POST event: basic parsing, store inbound for operator review and optionally auto-respond
  if (request.method === "POST") {
    let body = null;
    try { body = await request.json(); } catch (e) { return new Response("Invalid JSON", { status: 400 }); }

    // Basic structure: depends on provider. Extract phone and message where possible.
    // Save raw webhook to audit R2 or DB for traceability
    try {
      const id = randomUUID();
      await saveInboundAudit(env, id, body);
    } catch (e) {
      // non-fatal
      console.warn("[WA] audit save failed", e.message);
    }

    // Example: if provider sends { tenant_id, from, body, message_id }
    const tenantId = body?.tenant_id || null;
    const from = body?.from || body?.messages?.[0]?.from || null;
    const text = body?.text?.body || body?.messages?.[0]?.text?.body || null;

    // If there's a tenant and a message, route to bot processing
    if (tenantId && from && text) {
      // lightweight bot reply path: call bot engine (if tenant has auto-reply enabled)
      try {
        const shouldAuto = await isAutoReplyEnabled(env, tenantId);
        if (shouldAuto) {
          // enqueue reply to outbox; actual send occurs on dispatch
          const reply = await generateAutoReply(env, tenantId, text, from);
          if (reply) {
            await enqueueOutbox(env, tenantId, from, reply);
          }
        }
      } catch (e) {
        console.warn("[WA] processing error", e.message);
      }
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }

  return new Response("Method Not Allowed", { status: 405 });
}

async function saveInboundAudit(env, id, body) {
  try {
    // Best-effort save to R2 bucket for raw payloads (if configured)
    if (env.AUDIT) {
      const key = `wh_inbound/${id}.json`;
      await env.AUDIT.put(key, JSON.stringify(body));
    }
  } catch (e) { /* ignore */ }
}

async function isAutoReplyEnabled(env, tenantId) {
  try {
    const row = await env.DB.prepare("SELECT auto_reply FROM tenants WHERE id = ?").bind(tenantId).first();
    return !!(row && row.auto_reply === 1);
  } catch (e) { return false; }
}

async function generateAutoReply(env, tenantId, incomingText, from) {
  // Very small wrapper to call existing bot advisor where available
  try {
    // Use existing bot route via internal call to tenant DO or DB-driven prompt
    // For simplicity, defer to Bot advisor via env.AI if available
    if (!env.AI) return null;
    const summaryRows = await env.DB.prepare("SELECT name FROM tenants WHERE id = ?").bind(tenantId).first();
    const summary = { tenant: tenantId, tenantName: summaryRows?.name || null };
    const res = await env.AI.run("@cf/meta/llama-4-scout-17b-16e-instruct", {
      messages: [
        { role: "system", content: `You are a concise WhatsApp assistant for tenant ${summary.tenantName || tenantId}.` },
        { role: "user", content: incomingText },
      ],
      max_tokens: 200,
    });
    const reply = (res && (res.response || res.result || res.text)) || null;
    if (typeof reply === "string" && reply.length > 0) return String(reply).slice(0, 800);
  } catch (e) { console.warn("[WA] ai reply failed", e.message); }
  return null;
}

async function enqueueOutbox(env, tenantId, toNumber, body) {
  const id = randomUUID();
  await env.DB.prepare("INSERT INTO outbox (id, tenant_id, to_number, body, status, attempts, created_at) VALUES (?, ?, ?, ?, 'queued', 0, strftime('%s','now'))")
    .bind(id, tenantId, toNumber, body).run();
  return id;
}

export async function handleWhatsAppDispatch(request, env, ctx) {
  // Dispatch queued messages (admin/internal). Auth: header X-INTERNAL-TOKEN === env.INTERNAL_DISPATCH_TOKEN OR GitHub Actions/DO cron
  const token = request.headers.get("X-INTERNAL-TOKEN");
  if (!token || token !== env.INTERNAL_DISPATCH_TOKEN) {
    // Allow session-based dispatch when run from authenticated UI (optional)
    // For safety, reject by default
    return new Response("Unauthorized", { status: 401 });
  }

  // Fetch up to 25 queued items
  const rows = await env.DB.prepare("SELECT id, tenant_id, to_number, body, attempts FROM outbox WHERE status = 'queued' ORDER BY created_at ASC LIMIT 25").all();
  const items = rows.results || [];

  const results = [];
  for (const it of items) {
    try {
      const success = await trySend(env, it);
      if (success) {
        await env.DB.prepare("UPDATE outbox SET status = 'sent', attempts = attempts + 1 WHERE id = ?").bind(it.id).run();
        results.push({ id: it.id, status: 'sent' });
      } else {
        await env.DB.prepare("UPDATE outbox SET attempts = attempts + 1 WHERE id = ?").bind(it.id).run();
        // leave queued or mark failed after attempts > 3
        const attempts = (it.attempts || 0) + 1;
        if (attempts >= 3) {
          await env.DB.prepare("UPDATE outbox SET status = 'failed' WHERE id = ?").bind(it.id).run();
          results.push({ id: it.id, status: 'failed' });
        } else {
          results.push({ id: it.id, status: 'retry' });
        }
      }
    } catch (e) {
      console.warn('[WA] dispatch error', e.message);
    }
  }

  return new Response(JSON.stringify({ ok: true, processed: results.length, results }), { status: 200 });
}

async function trySend(env, item) {
  // If WhatsApp API not configured, return false so items remain queued
  if (!env.WHATSAPP_API_URL || !env.WHATSAPP_API_TOKEN) return false;

  try {
    // Platform-specific payload; here we attempt a generic POST JSON with to+body
    const payload = { to: item.to_number, body: item.body };
    const res = await fetch(env.WHATSAPP_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + env.WHATSAPP_API_TOKEN },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch (e) {
    console.warn('[WA] send failed', e.message);
    return false;
  }
}
