import { handleAuth } from "./api/auth.js";
import { handleAgent } from "./api/agent.js";
import { handleAgent } from "./api/agent.js";
import { handleMessaging } from "./api/messaging.js";
import { ChatRoom } from "./chat-room.js";
export { ChatRoom };
import { CONFIG } from "./config.js";
import { handleIngest } from "./api/ingest.js";
import { handleCommands } from "./api/commands.js";
import { handleDashboard } from "./api/dashboard.js";
import { handleHealth } from "./api/health.js";
import { handleBotChat } from "./bot/chat.js";
import { handlePublicBotChat } from "./bot/public.js";
import { handleKillSwitch } from "./guardrail/kill-switch.js";
import { handleSignup, handleLogin, handleLogout, handleVerify, handleMe } from "./api/auth.js";
import { handleMachinesList, handleMachineCreate, handleMachineDelete } from "./api/machines.js";
import { handleApiKeyList, handleApiKeyCreate, handleApiKeyRevoke, verifyApiKey } from "./api/apikeys.js";
import { handleTenantMe } from "./api/tenants.js";
import { handle2FASetup, handle2FAVerify, handle2FADisable, handle2FAStatus } from "./api/2fa.js";
import { handleInviteList, handleInviteCreate, handleInviteRevoke, handleInviteAccept } from "./api/invites.js";
import { handlePlans, handleCurrentPlan, handleSelectPlan, handleStripeCheckout, handleStripeWebhook } from "./api/billing.js";
import { handleTemplatesList, handleTemplateInstall } from "./api/templates.js";
import { handleRulesList, handleRuleCreate, handleRuleUpdate, handleRuleDelete } from "./api/rules.js";
import { requireAuth, requireCSRF, securityHeaders } from "./auth/middleware.js";
import { LANDING_HTML } from "./web/landing.js";
import { DASHBOARD_HTML } from "./web/dashboard.js";
import { SIGNUP_HTML, LOGIN_HTML, VERIFY_HTML } from "./web/auth.js";
import { BOT_HTML } from "./bot/ui.js";
import { ONBOARDING_HTML } from "./web/onboarding.js";
import { handleBahBorakWebhook, handleBahBorakDispatch } from "./api/whatsapp.js";

export { Tenant } from "./tenant/durable-object.js";

const html = (body) => new Response(body, { headers: { "Content-Type": "text/html;charset=utf-8" } });

export default {
  async fetch(request, env, ctx) {

    if (request.url.includes("/api/auth/")) {
      const authRes = await handleAuth(request, env);
      if (authRes) return authRes;
    }
    if (request.url.includes("/api/agent")) {
      const agentRes = await handleAgent(request, env);
      if (agentRes) return agentRes;
    }
  

    if (request.url.includes("/api/agent")) {
      const agentRes = await handleAgent(request, env);
      if (agentRes) return agentRes;
    }
  

    const isApi = request.url.includes("/api/");
    const isWs = request.url.includes("/ws/");
    if (request.method === "GET" && !isApi && !isWs && env.ASSETS) {
      return env.ASSETS.fetch(request);
    }


    


    const wsUrl = new URL(request.url);
    if (wsUrl.pathname.startsWith("/ws/")) {
      const roomId = wsUrl.pathname.split("/")[2];
      const id = env.CHAT_ROOM.idFromName(roomId);
      const stub = env.CHAT_ROOM.get(id);
      const doUrl = new URL(request.url);
      doUrl.pathname = "/ws";
      return stub.fetch(new Request(doUrl, request));
    }


    if (wsUrl.pathname.startsWith("/api/conversations")) {
      const msgRes = await handleMessaging(request, env, wsUrl);
      if (msgRes) return msgRes;
    }


    

    const url = new URL(request.url);
    const path = url.pathname;

    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, X-Tenant-ID, X-API-Key, X-CSRF-Token",
        },
      });
    }

    // --- Public Bot (no auth) ---
    if (path === "/api/bot/public" && request.method === "POST") return handlePublicBotChat(request, env);

    // --- BahBorak webhook & dispatch (stubs) ---
    if (path === "/api/whatsapp/webhook") {
      // Meta/BahBorak webhook verification uses GET for challenge and POST for events
      if (request.method === "GET" || request.method === "POST") return handleBahBorakWebhook(request, env);
    }
    if (path === "/api/whatsapp/dispatch" && request.method === "POST") {
      // Internal dispatch endpoint: requires an internal token or workspace session
      // The handler will allow dispatch when env.INTERNAL_DISPATCH_TOKEN matches header X-INTERNAL-TOKEN
      return handleBahBorakDispatch(request, env, ctx);
    }

    // --- Public routes ---
    if (path === "/health") return handleHealth();
    if (path === "/" || path === "") return html(LANDING_HTML);
    if (path === "/signup") return html(SIGNUP_HTML);
    if (path === "/login") return html(LOGIN_HTML);
    if (path === "/verify") return html(VERIFY_HTML);
    if (path === "/accept") return html(ACCEPT_HTML);

    // --- Auth API ---
    if (path === "/api/stripe/webhook" && request.method === "POST") return handleStripeWebhook(request, env);
    if (path === "/api/auth/signup" && request.method === "POST") return handleSignup(request, env);
    if (path === "/api/auth/login" && request.method === "POST") return handleLogin(request, env);
    if (path === "/api/auth/logout" && request.method === "POST") return handleLogout(request, env);
    if (path === "/api/auth/verify" && request.method === "GET") return handleVerify(request, env);
    if (path === "/api/auth/accept" && request.method === "POST") return handleInviteAccept(request, env);

    // --- Machine ingest via API key (no session) ---
    if (path.startsWith("/api/ingest")) {
      const apiKey = request.headers.get("X-API-Key");
      const keyInfo = await verifyApiKey(env, apiKey, "ingest:write");
      if (!keyInfo) return Response.json({ error: "Invalid API key" }, { status: 401 });
      return await handleIngest(request, env, keyInfo.tenantId);
    }

    // --- Auth required below ---
    const auth = await requireAuth(env, request);
    if (auth.error) {
      if (path === "/dashboard" || path === "/bot" || path === "/onboarding") {
        return Response.redirect(new URL("/login", request.url).toString(), 302);
      }
      return securityHeaders(auth.error);
    }
    const session = auth.session;

    const csrf = await requireCSRF(env, request, session);
    if (csrf.error) return securityHeaders(csrf.error);

    if (path === "/api/auth/me" && request.method === "GET") {
      return securityHeaders(await handleMe(request, env, session));
    }

    if (path === "/dashboard") {
      const t = await env.DB.prepare("SELECT onboarded, factory_name FROM tenants WHERE id = ?").bind(session.tenantId).first();
      if (!t || !t.factory_name || t.onboarded === 0) {
        return Response.redirect(new URL("/onboarding", request.url).toString(), 302);
      }
      return html(DASHBOARD_HTML);
    }
    if (path === "/bot") return html(BOT_HTML);

    if (path === "/api/machines" && request.method === "GET") {
      return securityHeaders(await handleMachinesList(request, env, session));
    }
    if (path === "/api/machines" && request.method === "POST") {
      return securityHeaders(await handleMachineCreate(request, env, session));
    }
    if (path.startsWith("/api/machines/") && request.method === "DELETE") {
      const id = path.slice("/api/machines/".length);
      return securityHeaders(await handleMachineDelete(request, env, session, id));
    }

    if (path === "/api/keys" && request.method === "GET") {
      return securityHeaders(await handleApiKeyList(request, env, session));
    }
    if (path === "/api/keys" && request.method === "POST") {
      return securityHeaders(await handleApiKeyCreate(request, env, session));
    }
    if (path.startsWith("/api/keys/") && request.method === "DELETE") {
      const id = path.slice("/api/keys/".length);
      return securityHeaders(await handleApiKeyRevoke(request, env, session, id));
    }

    if (path === "/onboarding") return html(ONBOARDING_HTML);

    if (path === "/api/tenants/me") {
      return securityHeaders(await handleTenantMe(request, env, session));
    }

    if (path === "/api/rules" && request.method === "GET") {
      return securityHeaders(await handleRulesList(request, env, session));
    }
    if (path === "/api/rules" && request.method === "POST") {
      return securityHeaders(await handleRuleCreate(request, env, session));
    }
    if (path.startsWith("/api/rules/") && request.method === "PATCH") {
      const id = path.slice("/api/rules/".length);
      return securityHeaders(await handleRuleUpdate(request, env, session, id));
    }
    if (path.startsWith("/api/rules/") && request.method === "DELETE") {
      const id = path.slice("/api/rules/".length);
      return securityHeaders(await handleRuleDelete(request, env, session, id));
    }

    if (path === "/api/ws" && request.headers.get("Upgrade") === "websocket") {
      const stub = env.TENANT.get(env.TENANT.idFromName(session.tenantId));
      return stub.fetch(request);
    }

    if (path === "/api/templates" && request.method === "GET") {
      return securityHeaders(await handleTemplatesList(request, env));
    }
    if (path.startsWith("/api/templates/") && path.endsWith("/install") && request.method === "POST") {
      const id = path.slice("/api/templates/".length, -"/install".length);
      return securityHeaders(await handleTemplateInstall(request, env, session, id));
    }

    if (path === "/api/billing/plans" && request.method === "GET") {
      return securityHeaders(await handlePlans(request, env, session));
    }
    if (path === "/api/billing/current" && request.method === "GET") {
      return securityHeaders(await handleCurrentPlan(request, env, session));
    }
    if (path === "/api/billing/select" && request.method === "POST") {
      return securityHeaders(await handleSelectPlan(request, env, session));
    }
    if (path === "/api/billing/checkout" && request.method === "POST") {
      return securityHeaders(await handleStripeCheckout(request, env, session));
    }

    if (path === "/api/invites" && request.method === "GET") {
      return securityHeaders(await handleInviteList(request, env, session));
    }
    if (path === "/api/invites" && request.method === "POST") {
      return securityHeaders(await handleInviteCreate(request, env, session));
    }
    if (path.startsWith("/api/invites/") && request.method === "DELETE") {
      const id = path.slice("/api/invites/".length);
      return securityHeaders(await handleInviteRevoke(request, env, session, id));
    }

    if (path === "/api/2fa/status" && request.method === "GET") {
      return securityHeaders(await handle2FAStatus(request, env, session));
    }
    if (path === "/api/2fa/setup" && request.method === "POST") {
      return securityHeaders(await handle2FASetup(request, env, session));
    }
    if (path === "/api/2fa/verify" && request.method === "POST") {
      return securityHeaders(await handle2FAVerify(request, env, session));
    }
    if (path === "/api/2fa/disable" && request.method === "POST") {
      return securityHeaders(await handle2FADisable(request, env, session));
    }

    if (path === "/api/kill") return handleKillSwitch(request, env);

    const tenantId = session.tenantId;

    try {
      if (path.startsWith("/api/ingest")) return await handleIngest(request, env, tenantId);
      if (path.startsWith("/api/commands")) return await handleCommands(request, env, tenantId);
      if (path.startsWith("/api/dashboard")) return await handleDashboard(request, env, tenantId);
      if (path.startsWith("/api/bot/chat")) return await handleBotChat(request, env, tenantId);
    } catch (e) {
      return securityHeaders(Response.json({ error: "Internal error", message: e.message }, { status: 500 }));
    }

    return securityHeaders(Response.json({ error: "Not Found", path }, { status: 404 }));
  },
};
