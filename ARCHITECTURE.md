# Architecture

## Layers

### 1. Cloud Layer
- Multi-tenant (one isolated workspace per business)
- Deterministic rules engine
- Immutable audit log
- Advisory AI (Bot — never sends without approval)

### 2. WhatsApp Integration Layer (roadmap)
- WhatsApp Business API connection
- Message ingestion
- Reply dispatch
- Number verification

### 3. Dashboard Layer
- Conversation view
- Analytics
- Rule editor
- Team management

## Data Schema

| Table | Purpose |
|-------|---------|
| tenants | Business accounts |
| users | Team members |
| sessions | Auth sessions |
| api_keys | Integration keys |
| rules | Deterministic reply rules |
| rule_templates | Marketplace |
| conversations | Customer threads |
| messages | Individual messages |
| alerts | System events |
| audit_log | Auth and action events |

## Security

- Password: PBKDF2-SHA256, 100k iterations, salt
- Session: HttpOnly, Secure, SameSite=Strict cookie
- CSRF: token on all state-changing requests
- Rate limits: per-tenant and per-IP
- Kill switch: global and per-tenant
- Secrets: environment only, never in code

## Compliance

- PDPA (Malaysia): data minimisation, tenant isolation
- WhatsApp Business Policy: opt-in, no spam
- GDPR-ready architecture (for future expansion)
