import { handleBusinessAutoReply } from "../auto-reply.js";
export async function handleMessaging(request, env, url) {
  const path = url.pathname;
  const method = request.method;

  if (path === "/api/conversations" && method === "GET") {
    const tenantId = request.headers.get("X-Tenant-ID") || "tenant-1";
    const { results } = await env.DB.prepare(
      "SELECT * FROM conversations WHERE tenant_id = ? ORDER BY updated_at DESC"
    ).bind(tenantId).all();
    return Response.json(results);
  }

  if (path === "/api/conversations" && method === "POST") {
    const tenantId = request.headers.get("X-Tenant-ID") || "tenant-1";
    const { contact_id, mode = "private" } = await request.json();
    const id = crypto.randomUUID();
    const now = Date.now();
    await env.DB.prepare(
      "INSERT INTO conversations (id, tenant_id, contact_id, mode, updated_at) VALUES (?, ?, ?, ?, ?)"
    ).bind(id, tenantId, contact_id, mode, now).run();
    return Response.json({ id });
  }

  const msgMatch = path.match(/^\/api\/conversations\/([^\/]+)\/messages$/);
  if (msgMatch && method === "GET") {
    const convId = msgMatch[1];
    const { results } = await env.DB.prepare(
      "SELECT * FROM messages_encrypted WHERE conversation_id = ? ORDER BY created_at ASC"
    ).bind(convId).all();
    return Response.json(results);
  }

  if (msgMatch && method === "POST") {
    const convId = msgMatch[1];
    const body = await request.json();
    const { mode, ciphertext, iv, nonce, sender_pubkey } = body;
    const id = crypto.randomUUID();
    const now = Date.now();
    const senderDeviceId = "device-1";

    await env.DB.prepare(
      "INSERT INTO messages_encrypted (id, conversation_id, sender_device_id, mode, ciphertext, iv, nonce, sender_pubkey, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
    ).bind(id, convId, senderDeviceId, mode, ciphertext, iv, nonce, sender_pubkey, now).run();

    await env.DB.prepare(
      "UPDATE conversations SET updated_at = ? WHERE id = ?"
    ).bind(now, convId).run();

    const doId = env.CHAT_ROOM.idFromName(convId);
    const stub = env.CHAT_ROOM.get(doId);
    await stub.fetch("https://do/broadcast", {
      method: "POST",
      body: JSON.stringify({
        type: "message",
        message: { id, conversation_id: convId, mode, ciphertext, iv, nonce, sender_pubkey, created_at: now }
      })
    });

    if (mode === "business") {
      const tenantId = request.headers.get("X-Tenant-ID") || "tenant-1";
      await handleBusinessAutoReply(env, convId, tenantId, ciphertext, iv, nonce);
    }

    return Response.json({ id, created_at: now });
  }

  return null;
}
