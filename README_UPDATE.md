# BahBorak

> WhatsApp business automation for SMEs — now with an outbox queue and webhook stubs for WhatsApp provider integration.

## Connect your WhatsApp provider
Follow README_WHATSAPP.md and .env.example. Configure provider endpoint and token as Cloudflare Worker secrets.

## Quick migration after pulling changes
```bash
npm install
npx wrangler d1 migrations apply bahborak-db
npx wrangler deploy
```

