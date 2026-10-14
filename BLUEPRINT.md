# BahBorak — System Blueprint

**Version:** 1.0 · **Status:** Live prototype · **Last updated:** 2026-10-14

Source of truth. If code and this document disagree, this document wins.

---

## 1. What BahBorak Is

A WhatsApp business automation platform for Malaysian SMEs.

Mission: let small businesses automate customer replies on WhatsApp without hiring support staff.

Target market: Malaysian SMEs — F&B, retail, services, clinics, salons, online sellers.

Positioning: WhatsApp automation layer, not another chatbot.

---

## 2. Core Principles

1. Rules control. AI advises. Humans decide.
2. Customer data stays with the business.
3. No black box in customer replies.
4. Works with WhatsApp Business API.

---

## 3. High-Level Architecture

    [ WhatsApp Business API ]
                |
                v
    [ BahBorak Cloud — multi-tenant ]
       - Rules engine (deterministic)
       - Bot (AI advisor)
       - Tenant isolation
       - Audit log
       - Billing, auth, team

---

## 4. Features (Current)

- Auth: signup, login, 2FA, session, CSRF, rate limit
- Team: invites with roles
- Onboarding: 3-step wizard
- WhatsApp: connection setup, number verification
- Rules: CRUD + marketplace templates
- Bot: AI reply suggestions
- Dashboard: conversations, analytics
- Billing: plans, usage limits
- Audit: immutable log

---

## 5. Not Yet Built

- WhatsApp Business API integration (in progress)
- Real-time chat UI
- Multi-language replies (BM, English, Chinese, Tamil)
- Payment links in replies
- Broadcast messaging
- Template marketplace for local businesses

---

## 6. Tech Stack

| Layer | Description |
|-------|-------------|
| Cloud runtime | Edge-native serverless |
| Database | Managed SQLite per tenant |
| Object storage | Immutable audit log |
| Key-value store | Session, rate limit, config |
| AI | Edge-hosted inference |

---

## 7. Commercial Model

| Plan | Price | Messages | Users |
|------|-------|----------|-------|
| Free | RM0 | 100/mo | 1 |
| Starter | RM49/mo | 1,000/mo | 3 |
| Growth | RM199/mo | 10,000/mo | 10 |
| Business | RM499/mo | Unlimited | 25 |

---

## 8. Repo

vmojuga-pixel/BahBorak

---

## 9. Live

https://bahborak-api.vmojuga.workers.dev

---

## 10. Honest Status

Working: auth, multi-tenant, rules engine, dashboard, bot, billing, audit

Prototype-level: WhatsApp API integration, chat UI, multi-language

Not started: payment links, broadcast, template marketplace
