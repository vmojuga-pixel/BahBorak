# HANDOVER

**Version:** 1.0 · **Last updated:** 2026-10-14
**Status:** Live prototype · No customers yet

---

## 1. What This Document Is

Master handover for BahBorak. Covers how the system works, why it exists, decisions made, and what comes next.

If taking over, read end to end before touching code. BLUEPRINT.md, ARCHITECTURE.md, CODING_BOOK.md are detail layers.

---

## 2. Vision & Mission

**Vision:** Every Malaysian SME can automate WhatsApp replies without hiring support staff.

**Mission:** Give small businesses an AI assistant that handles common questions, respects customer data, and never sends without human approval.

**One-liner:** WhatsApp business automation for Malaysian SMEs.

**Positioning:** Automation layer, not another chatbot.

---

## 3. Who Built This

Solo technical founder based in Borneo, Malaysia. Works full-time hospitality. Builds on mobile.

Uses AI as a collaborative partner. Architecture and decisions are deliberate.

---

## 4. History

| Date | Event |
|------|-------|
| 2026-10-14 | BahBorak deployed live |
| 2026-10-14 | Renamed all refs, new D1/KV/R2 resources |
| 2026-10-14 | Deployed live at bahborak-api.vmojuga.workers.dev |
| 2026-10-14 | Docs rewritten for WhatsApp context |

---

## 5. Key Decisions

### 5.1 Rules control, AI advises
Deterministic rules handle replies. Bot suggests, human approves. No black box.

### 5.2 Multi-tenant isolation
One isolated workspace per business. Separate data, rules, audit.

### 5.3 Edge-native
Runs on edge infrastructure. Low latency, auto-scale.

### 5.4 PDPA-first
Customer data minimisation. Tenant isolation. No PII leak.

---

## 6. What Comes Next

### Immediate
- WhatsApp Business API integration
- Real-time chat UI
- Multi-language replies (BM, EN, ZH, TA)

### Short-term
- Payment links in replies
- Broadcast messaging
- Template marketplace for local businesses

### Long-term
- Series A
- Regional expansion (Indonesia, Singapore, Thailand)

---

## 7. Environment & Credentials

- VPS: Debian, root access
- Repo: ~/bahborak/
- Cloudflare token: /root/.cf-key
- Cloudflare account: 695a620ee3223aa69b69b1e48eb91962

### Production secrets (via wrangler)
- BREVO_API_KEY — email
- MAILTRAP_TOKEN — email fallback
- EMAIL_FROM — sender

### Never store in code
- API keys
- Cloudflare tokens
- Customer data

---

## 8. How to Deploy

    cd ~/bahborak
    export CLOUDFLARE_API_TOKEN=$(cat /root/.cf-key)
    export CLOUDFLARE_ACCOUNT_ID=695a620ee3223aa69b69b1e48eb91962
    npx wrangler deploy

Migrations:

    npx wrangler d1 migrations apply bahborak-db --remote

---

## 9. Migration History

| File | Purpose |
|------|---------|
| 0001_init | Tenants, messages, rules, alerts |
| 0002_auth | Users, sessions, api_keys, audit |
| 0003_apikeys | onboarded_at |
| 0004_2fa | TOTP columns |
| 0005_invites | Team invites |
| 0006_billing | Plans |
| 0007_templates | Rule marketplace |
| 0008_public_kb | Bot public KB |
| 0009_kb_seed | KB entries |
| 0010_aggregate | Message aggregates |

---

## 10. Failure Modes

| Symptom | Cause | Fix |
|---------|-------|-----|
| 401 on public Bot | Route order | Public route before auth |
| Deploy fails 6111 | Wrong token | Use /root/.cf-key |
| 500 on /dashboard | DO timeout | Check Durable Object logs |
| WhatsApp not replying | API not connected | Check integration |
| Migration fails | Schema conflict | Check order |

---

## 11. Known Limitations

1. WhatsApp Business API not integrated yet
2. No real-time chat UI
3. English only
4. No payment links
5. No broadcast
6. No template marketplace
7. No customers yet
8. No load testing

---

## 12. Contact

- Email: legates@northerncoastgroup.com
- Live: bahborak-api.vmojuga.workers.dev
- Code: github.com/vmojuga-pixel/BahBorak

---

**End of Handover.**
