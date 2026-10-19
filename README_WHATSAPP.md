### WhatsApp integration

This project includes a lightweight webhook handler and outbox queue to integrate with a WhatsApp provider. You will need to configure the following environment variables/secrets in Cloudflare:

- WHATSAPP_API_URL: Provider endpoint for sending messages
- WHATSAPP_API_TOKEN: Bearer token for outbound calls
- WHATSAPP_VERIFY_TOKEN: Token used for webhook verification
- INTERNAL_DISPATCH_TOKEN: Secret used to authorize dispatch runs

How to connect (example):
1. Set secrets using `npx wrangler secret put WHATSAPP_API_TOKEN` etc.
2. Apply migrations: `npx wrangler d1 migrations apply bahborak-db`
3. Verify webhook (your provider will send a GET challenge) — it should respond with the configured WHATSAPP_VERIFY_TOKEN challenge
4. Enable auto-reply per tenant from admin dashboard or DB (tenants.auto_reply = 1)
5. Run dispatch (manual): `curl -X POST https://your-worker/api/whatsapp/dispatch -H "X-INTERNAL-TOKEN: <token>"`

Notes:
- The dispatch endpoint will attempt delivery when WHATSAPP_API_URL and WHATSAPP_API_TOKEN are configured. If not set, items remain queued.
- For production, set up a scheduled Cron trigger to call dispatch periodically (e.g., every minute) using a secure internal token.
