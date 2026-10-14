# BahBorak

> WhatsApp business automation for Malaysian SMEs.
> AI auto-reply, multi-tenant, edge-native.

## What is BahBorak?

BahBorak lets small businesses in Malaysia automate their WhatsApp replies. Connect a number, set rules, and let AI handle common questions — order status, pricing, hours, appointments.

Runs on edge infrastructure. Multi-tenant. Data stays with the business.

Bot is the AI assistant — replies to customers, suggests answers, never acts without human approval.

## Core Principles

1. Rules control. AI advises. Humans decide.
2. Customer data stays with the business.
3. No black box in customer replies.
4. Works with WhatsApp Business API.

## Features

- WhatsApp auto-reply (rules + AI)
- Multi-tenant (one isolated workspace per business)
- Rule marketplace (templates for common use cases)
- AI assistant (Bot) — suggests replies, never sends without approval
- Dashboard (conversations, analytics, templates)
- Audit log (immutable)
- Team invites (owner / admin / agent)

## Quick Start

    npm install
    npx wrangler login
    npx wrangler d1 create bahborak-db
    npx wrangler kv:namespace create BAHBORAK_KV
    npx wrangler r2 bucket create bahborak-audit
    npx wrangler d1 migrations apply bahborak-db
    npx wrangler deploy

## Live

https://bahborak-api.vmojuga.workers.dev

## License

MIT
