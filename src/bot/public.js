const BOT_SYSTEM_PROMPT = "You are Bot, the BahBorak automation assistant for BahBorak. BahBorak is a BahBorak auto-reply platform for Malaysian SMEs. It answers customer questions automatically using rules and AI. Answer only about BahBorak: features, pricing, how it works, BahBorak automation for small business. If asked anything else, reply: I can only help with BahBorak. Do not mention any other industry, product, or technology.";

async function loadKB(env) {
  try {
    const rows = await env.DB.prepare(
      "SELECT question, answer FROM public_kb ORDER BY priority DESC LIMIT 10"
    ).all();
    return rows.results || [];
  } catch (e) { return []; }
}

function sanitize(text) {
  const banned = ["plc", "scada", "modbus", "opc", "profinet", "profibus", "manufacturing equipment", "operational layer", "industrial", "deployment and management", "protocols in common use"];
  const lower = text.toLowerCase();
  for (const term of banned) {
    if (lower.includes(term)) {
      return "BahBorak is a BahBorak business automation platform for Malaysian SMEs. It handles customer questions automatically using rules and AI. Ask me about features, pricing, or how it works.";
    }
  }
  return text;
}

export async function handlePublicBotChat(request, env) {
  if (request.method !== "POST") return Response.json({ error: "POST required" }, { status: 405 });

  const ip = request.headers.get("CF-Connecting-IP") || "anon";
  const rlKey = "rl:bot:public:" + ip;
  const now = Math.floor(Date.now() / 1000);
  const raw = await env.KV.get(rlKey, "json");
  if (raw && now - raw.start < 3600 && raw.count >= 10) {
    return Response.json({ error: "Rate limit reached. Try again later." }, { status: 429 });
  }
  if (!raw || now - raw.start >= 3600) {
    await env.KV.put(rlKey, JSON.stringify({ count: 1, start: now }), { expirationTtl: 3600 });
  } else {
    await env.KV.put(rlKey, JSON.stringify({ count: raw.count + 1, start: raw.start }), { expirationTtl: 3600 });
  }

  const { message, history } = await request.json();
  if (!message || typeof message !== "string" || message.length > 400) {
    return Response.json({ error: "Invalid message" }, { status: 400 });
  }

  if (!env.AI) return Response.json({ reply: "Bot is temporarily offline." });

  const kb = await loadKB(env);
  const kbText = kb.map(k => "- Q: " + k.question + "\n  A: " + k.answer).join("\n");

  const messages = [{ role: "system", content: BOT_SYSTEM_PROMPT }];
  if (Array.isArray(history)) {
    for (const h of history.slice(-4)) {
      if (h.role && h.content && (h.role === "user" || h.role === "assistant")) {
        messages.push({ role: h.role, content: String(h.content).slice(0, 400) });
      }
    }
  }

  messages.push({
    role: "user",
    content: "Knowledge base about BahBorak:\n" + kbText + "\n\nQuestion: " + message + "\n\nAnswer ONLY about BahBorak. If the question is not about BahBorak, say you can only help with BahBorak."
  });

  try {
    const response = await env.AI.run("@cf/meta/llama-3.3-70b-instruct-fp8-fast", { messages, max_tokens: 200 });
    const rawReply = response.response ?? "I could not generate a reply.";
    return Response.json({
      reply: sanitize(rawReply),
      advisory_only: true,
      scope: "bahborak_only",
    });
  } catch (e) {
    return Response.json({ error: "AI error" }, { status: 500 });
  }
}
