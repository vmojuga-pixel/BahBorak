## SECRETS.md

This project stores runtime secrets in Cloudflare Worker secrets (via `npx wrangler secret put`) and GitHub Actions secrets for CI deployments.

Required Cloudflare secrets (set via `wrangler secret put`):
- WHATSAPP_API_TOKEN - Bearer token for the WhatsApp provider (do not commit to repo)
- WHATSAPP_VERIFY_TOKEN - Token used to verify webhook challenges (hub.verify_token)
- INTERNAL_DISPATCH_TOKEN - Token used by cron or operators to trigger outbox dispatch
- CF_API_TOKEN, CF_ACCOUNT_ID - used by GitHub Actions for deploy

GitHub Actions secrets (Repository Settings → Secrets):
- CF_API_TOKEN
- CF_ACCOUNT_ID

Never store secrets in plaintext in the repository. Use `wrangler secret put` or Cloudflare dashboard to keep secrets safe.
