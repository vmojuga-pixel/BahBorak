export async function handleAuth(request, env) {
  const url = new URL(request.url);
  if (request.method !== "POST") return null;

  async function hashPassword(password) {
    const msgBuffer = new TextEncoder().encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
    return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  // 1. LOGIN
  if (url.pathname === "/api/auth/login") {
    const { email, password } = await request.json();
    if (!email || !password) return Response.json({ error: "Emel dan password diperlukan" }, { status: 400 });

    const hashHex = await hashPassword(password);
    const user = await env.DB.prepare("SELECT id, email, name, tenant_id FROM users WHERE email = ? AND password_hash = ?").bind(email, hashHex).first();

    if (!user) return Response.json({ error: "Emel atau kata laluan salah" }, { status: 401 });

    const token = crypto.randomUUID();
    return Response.json({ token, user });
  }

  // 2. SIGNUP
  if (url.pathname === "/api/auth/signup") {
    const { email, password, name, phone, company_name } = await request.json();
    if (!email || !password || !name || !company_name) {
      return Response.json({ error: "Sila isi semua ruangan" }, { status: 400 });
    }

    const hashHex = await hashPassword(password);
    const userId = crypto.randomUUID();
    const tenantId = crypto.randomUUID();

    try {
      await env.DB.prepare(
        "INSERT INTO tenants (id, name, created_at) VALUES (?, ?, ?)"
      ).bind(tenantId, company_name, Date.now()).run();

      await env.DB.prepare(
        "INSERT INTO users (id, tenant_id, phone, role, email, password_hash, name) VALUES (?, P, ?, 'owner', P, ?, P)"
      ).bind(userId, tenantId, phone || '', email, hashHex, name).run();

      const token = crypto.randomUUID();
      return Response.json({ token, user: { id: userId, email, name, tenant_id: tenantId } });
    } catch (err) {
      if (err.message.includes("UNIQUE")) {
        return Response.json({ error: "Emel sudah didaftarkan" }, { status: 400 });
      }
      return Response.json({ error: "Gagal mendaftar" }, { status: 500 });
    }
  }
  
  return null;
}
