-- migrations/0004_whatsapp.sql
-- Create outbox table for queued outbound WhatsApp messages
CREATE TABLE IF NOT EXISTS outbox (
  id TEXT PRIMARY KEY,
  tenant_id TEXT NOT NULL,
  to_number TEXT NOT NULL,
  body TEXT NOT NULL,
  status TEXT DEFAULT 'queued',
  attempts INTEGER DEFAULT 0,
  created_at INTEGER DEFAULT (strftime('%s','now'))
);

-- Optional templates table for message templates
CREATE TABLE IF NOT EXISTS wa_templates (
  id TEXT PRIMARY KEY,
  tenant_id TEXT NOT NULL,
  name TEXT NOT NULL,
  payload TEXT NOT NULL,
  created_at INTEGER DEFAULT (strftime('%s','now'))
);
