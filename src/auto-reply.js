export async function handleBusinessAutoReply(env, convId, tenantId, ciphertext, iv, nonce) {
  // 1. Dekripsi ciphertext (Mock - akan guna KMS Nanti)
  const plaintext = "dummy plaintext";

  // 2. Semak auto-reply rules
  const { results: rules } = await env.DB.prepare(
    "SELECT keyword, reply FROM auto_replies WHERE tenant_id = ? AND active = 1"
  ).bind(tenantId).all();

  // Mock match (Since kita belum boleh dekrip sebenightnya tanpa KMS)
  const hit = rules.find(r => plaintext.includes(r.keyword));
  if (!hit) return;

  // 3. Simpan balasan (Encrypt balik)
  const replyId = crypto.randomUUID();
  const now = Date.now();
  const replyCiphertext = "encrypted_reply_" + Date.now(); // Mock
  
  await env.DB.prepare(
    "INSERT INTO messages_encrypted (id, conversation_id, sender_device_id, mode, ciphertext, iv, nonce, sender_pubkey, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
  ).bind(replyId, convId, "bot", "business", replyCiphertext, "iv", "nonce", "pubkey", now).run();

  // 4. Log akses
  await env.DB.prepare(
    "INSERTINTO access_log (id, tenant_id, user_id, conversation_id, action, created_at) VALUES (?, ?, ?, ?, ?, ?)"
  ).bind(crypto.randomUUID(), tenantId, "system", convId, "auto_reply", now).run();

  // 5. Broadcast ke clients
  const doId = env.CHAT_ROOM.idFromName(convId);
  const stub = env.CHAT_ROOM.get(doId);
  await stub.fetch("https://do/broadcast", {
    method: "POST",
    body: JSON.stringify({
      type: "message",
      message: { id: replyId, conversation_id: convId, mode: "business", ciphertext: replyCiphertext, iv: "iv", nonce: "nonce", sender_pubkey: "pubkey", created_at: now }
    })
  });
}
