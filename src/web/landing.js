export const LANDING_HTML = `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>BahBorak — BahBorak Automation for Malaysian Business</title>
<script src="https://cdn.tailwindcss.com"></script>
<script>
tailwind.config = { darkMode: 'class', theme: { extend: {
  colors: { ink: { 950:'#0a0a0a', 900:'#111111', 800:'#1a1a1a', 700:'#262626', 600:'#404040' } }
}}}
</script>
<style>
  html { scroll-behavior: smooth; }
  body { -webkit-font-smoothing: antialiased; }
  .grid-bg {
    background-image: linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px);
    background-size: 48px 48px;
  }
</style>
</head>
<body class="bg-ink-950 text-neutral-200 font-sans">

<header class="fixed top-0 inset-x-0 z-50 border-b border-white/5 backdrop-blur-xl bg-ink-950/70">
  <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
    <a href="/" class="font-mono text-sm tracking-[0.3em] uppercase text-neutral-300">BahBorak</a>
    <nav class="hidden md:flex items-center gap-8 text-sm text-neutral-500">
      <a href="#features" class="hover:text-neutral-100 transition">Features</a>
      <a href="#pricing" class="hover:text-neutral-100 transition">Pricing</a>
      <a href="#ask-bot" class="hover:text-neutral-100 transition">Ask Bot</a>
    </nav>
    <div class="flex items-center gap-3">
      <a href="/login" class="text-sm text-neutral-400 hover:text-neutral-100 transition">Login</a>
      <a href="/signup" class="text-sm px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-neutral-200 transition">Get started</a>
    </div>
  </div>
</header>

<section class="relative pt-40 pb-32 grid-bg border-b border-white/5">
  <div class="max-w-6xl mx-auto px-6">
    <div class="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-500 border border-white/10 rounded-full px-4 py-1.5 mb-8">
      <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
      Built for Malaysian SMEs
    </div>
    <h1 class="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl mb-8">
      Your BahBorak. <span class="text-neutral-500">Automated.</span>
    </h1>
    <p class="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-12">
      BahBorak handles customer questions on BahBorak — order status, pricing, hours, bookings. Set your rules. Bot replies. You approve what matters.
    </p>
    <div class="flex flex-wrap items-center gap-4">
      <a href="/signup" class="px-6 py-3.5 rounded-lg bg-white text-black font-medium text-sm hover:bg-neutral-200 transition">Start free</a>
      <a href="#ask-bot" class="px-6 py-3.5 rounded-lg border border-white/10 text-sm hover:border-white/25 transition">Ask Bot</a>
    </div>
  </div>
</section>

<section id="features" class="py-28 border-b border-white/5">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-xs font-mono tracking-[0.3em] uppercase text-neutral-600 mb-4">Features</div>
    <h2 class="text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl mb-16">
      Rules control. Bot advises. You decide.
    </h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden border border-white/5">
      <div class="bg-ink-950 p-8">
        <div class="font-mono text-xs text-neutral-600 mb-6">01</div>
        <h3 class="font-semibold mb-2">Auto-Reply</h3>
        <p class="text-sm text-neutral-500">Answer common questions instantly. Pricing, hours, order status, bookings.</p>
      </div>
      <div class="bg-ink-950 p-8">
        <div class="font-mono text-xs text-neutral-600 mb-6">02</div>
        <h3 class="font-semibold mb-2">Rule Engine</h3>
        <p class="text-sm text-neutral-500">Deterministic replies. No black box. Every reply has a reason.</p>
      </div>
      <div class="bg-ink-950 p-8">
        <div class="font-mono text-xs text-neutral-600 mb-6">03</div>
        <h3 class="font-semibold mb-2">Bot Assistant</h3>
        <p class="text-sm text-neutral-500">AI suggests replies for tricky questions. You approve before send.</p>
      </div>
      <div class="bg-ink-950 p-8">
        <div class="font-mono text-xs text-neutral-600 mb-6">04</div>
        <h3 class="font-semibold mb-2">Multi-Business</h3>
        <p class="text-sm text-neutral-500">Manage multiple shops or brands. Isolated data per business.</p>
      </div>
      <div class="bg-ink-950 p-8">
        <div class="font-mono text-xs text-neutral-600 mb-6">05</div>
        <h3 class="font-semibold mb-2">Audit Log</h3>
        <p class="text-sm text-neutral-500">Every reply logged. Every action traceable. Full history.</p>
      </div>
      <div class="bg-ink-950 p-8">
        <div class="font-mono text-xs text-neutral-600 mb-6">06</div>
        <h3 class="font-semibold mb-2">Team Access</h3>
        <p class="text-sm text-neutral-500">Invite staff with roles — owner, admin, agent. Control who replies.</p>
      </div>
    </div>
  </div>
</section>

<section id="pricing" class="py-28 border-b border-white/5">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-xs font-mono tracking-[0.3em] uppercase text-neutral-600 mb-4">Pricing</div>
    <h2 class="text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl mb-16">
      Plans that fit Malaysian SMEs.
    </h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="p-6 rounded-xl bg-ink-900 border border-white/5">
        <div class="font-semibold text-lg mb-1">Free</div>
        <div class="text-3xl font-bold mb-4">RM0</div>
        <ul class="text-sm text-neutral-500 space-y-2 mb-6">
          <li>100 messages/mo</li>
          <li>1 user</li>
          <li>Basic rules</li>
        </ul>
        <a href="/signup" class="block text-center py-2 rounded-lg border border-white/10 text-sm hover:border-white/25">Start</a>
      </div>
      <div class="p-6 rounded-xl bg-ink-900 border border-white/5">
        <div class="font-semibold text-lg mb-1">Starter</div>
        <div class="text-3xl font-bold mb-4">RM49<span class="text-sm text-neutral-500 font-normal">/mo</span></div>
        <ul class="text-sm text-neutral-500 space-y-2 mb-6">
          <li>1,000 messages/mo</li>
          <li>3 users</li>
          <li>Rule marketplace</li>
        </ul>
        <a href="/signup" class="block text-center py-2 rounded-lg border border-white/10 text-sm hover:border-white/25">Choose</a>
      </div>
      <div class="p-6 rounded-xl bg-ink-900 border-2 border-white/30 relative">
        <div class="absolute top-3 right-3 text-xs font-mono text-green-400">POPULAR</div>
        <div class="font-semibold text-lg mb-1">Growth</div>
        <div class="text-3xl font-bold mb-4">RM199<span class="text-sm text-neutral-500 font-normal">/mo</span></div>
        <ul class="text-sm text-neutral-500 space-y-2 mb-6">
          <li>10,000 messages/mo</li>
          <li>10 users</li>
          <li>AI assistant (Bot)</li>
        </ul>
        <a href="/signup" class="block text-center py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-neutral-200">Choose</a>
      </div>
      <div class="p-6 rounded-xl bg-ink-900 border border-white/5">
        <div class="font-semibold text-lg mb-1">Business</div>
        <div class="text-3xl font-bold mb-4">RM499<span class="text-sm text-neutral-500 font-normal">/mo</span></div>
        <ul class="text-sm text-neutral-500 space-y-2 mb-6">
          <li>Unlimited messages</li>
          <li>25 users</li>
          <li>Priority support</li>
        </ul>
        <a href="/signup" class="block text-center py-2 rounded-lg border border-white/10 text-sm hover:border-white/25">Choose</a>
      </div>
    </div>
  </div>
</section>

<section id="ask-bot" class="py-28 border-b border-white/5">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-xs font-mono tracking-[0.3em] uppercase text-neutral-600 mb-4">Ask Bot</div>
    <h2 class="text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl mb-4">Questions? Ask Bot.</h2>
    <p class="text-neutral-500 mb-10 max-w-xl">Bot knows BahBorak. Features, pricing, how it works. Ask anything.</p>

    <div id="bot-panel" style="display:flex;width:100%;max-width:640px;height:520px;background:#141414;border:1px solid #262626;border-radius:16px;flex-direction:column;overflow:hidden;">
      <div style="padding:14px 16px;border-bottom:1px solid #262626;display:flex;align-items:center;gap:8px;">
        <div style="font-weight:600;font-size:14px;">Bot</div>
        <div style="font-size:11px;color:#737373;margin-left:auto;font-family:ui-monospace,monospace;">bahborak assistant</div>
      </div>
      <div id="bot-msgs" style="flex:1;overflow-y:auto;padding:14px 16px;display:flex;flex-direction:column;gap:10px;">
        <div style="background:#1a1a1a;border:1px solid #262626;border-radius:10px;padding:10px 13px;font-size:13px;color:#d4d4d4;line-height:1.5;max-width:90%;">Hi. I can explain BahBorak — features, pricing, how it works. Ask me anything.</div>
      </div>
      <form id="bot-form" style="padding:12px;border-top:1px solid #262626;display:flex;gap:8px;">
        <input id="bot-input" type="text" placeholder="Ask about BahBorak..." autocomplete="off" required style="flex:1;padding:10px 12px;background:#0a0a0a;border:1px solid #262626;border-radius:8px;color:#e5e5e5;font-size:13px;outline:none;">
        <button type="submit" id="bot-send" style="padding:10px 14px;background:#e5e5e5;color:#0a0a0a;border:none;border-radius:8px;font-weight:600;font-size:13px;cursor:pointer;">Send</button>
      </form>
    </div>
  </div>
</section>

<footer class="py-16">
  <div class="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6 text-sm text-neutral-600">
    <div class="font-mono tracking-widest">BAHBORAK · 2026</div>
    <div class="flex items-center gap-6">
      <a href="/login" class="hover:text-neutral-300 transition">Login</a>
      <a href="/signup" class="hover:text-neutral-300 transition">Sign up</a>
      <a href="https://github.com/vmojuga-pixel/BahBorak" class="hover:text-neutral-300 transition">GitHub</a>
    </div>
  </div>
</footer>

<script>
(function(){
  const form = document.getElementById("bot-form");
  const input = document.getElementById("bot-input");
  const msgs = document.getElementById("bot-msgs");
  const send = document.getElementById("bot-send");
  let history = [];

  function add(text, who){
    const d = document.createElement("div");
    const base = "border-radius:10px;padding:10px 13px;font-size:13px;line-height:1.5;max-width:90%;white-space:pre-wrap;";
    d.style.cssText = base + (who === "user"
      ? "background:#1d4ed8;color:#fff;align-self:flex-end;"
      : "background:#1a1a1a;border:1px solid #262626;color:#d4d4d4;align-self:flex-start;");
    d.textContent = text;
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
    return d;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    add(text, "user");
    input.value = "";
    send.disabled = true;
    const loading = add("...", "bot");
    try {
      const r = await fetch("/api/bot/public", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history })
      });
      const j = await r.json();
      loading.textContent = j.reply || j.error || "No reply.";
      history.push({ role: "user", content: text });
      history.push({ role: "assistant", content: loading.textContent });
      history = history.slice(-6);
    } catch (err) {
      loading.textContent = "Error: " + err.message;
    } finally {
      send.disabled = false;
      input.focus();
    }
  });
})();
</script>

</body>
</html>`;
