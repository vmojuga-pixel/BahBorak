-- 1. Kunci Awam Peranti Pengguna (Private Mode)
CREATE TABLE IF NOT EXISTS device_keys (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  tenant_id TEXT NOT NULL,
  public_key TEXT NOT NULL,
  signing_key TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  revoked_at INTEGER
);

-- 2. Kunci Awam Bisnes (Business Mode)
CREATE TABLE IF NOT EXISTS tenant_keys (
  tenant_id TEXT PRIMARY KEY,
  public_key TEXT NOT NULL,
  wrapped_private_key TEXT NOT NULL,
  created_at INTEGER NOT NULL
);

-- 3. Perbualan (Conversations)
CREATE TABLE IF NOT EXISTS conversations (
  id TEXT PRIMARY KEY,
  tenant_id TEXT NOT NULL,
  contact_id TEXT NOT NULL,
  mode TEXT DEFAULT 'private',
  status TEXT DEFAULT 'open',
  updated_at INTEGER NOT NULL
);

-- 4. Mesej (Disimpan sebagai Ciphertext SAHAJA)
CREATE TABLE IF NOT EXISTS messages_encrypted (
  id TEXT PRIMARY KEY,
  conversation_id TEXT NOT NULL,
  sender_device_id TEXT NOT NULL,
  mode TEXT NOT NULL,
  ciphertext TEXT NOT NULL,
  iv TEXT NOT NULL,
  nonce TEXT NOT NULL,
  sender_pubkey TEXT NOT NULL,
  recipient_key_ref TEXT,
  created_at INTEGER NOT NULL,
  deleted_at INTEGER
);

-- 5. Auto-Reply & Audit Log
CREATE TABLE IF NOT EXISTS auto_replies (
  id TEXT PRIMARY KEY,
  tenant_id TEXT NOT NULL,
  keyword TEXT NOT NULL,
  reply TEXT NOT NULL,
  active INTEGER DEFAULT 1
);

CREATE TABLE IF NOT EXISTS access_log (
  id TEXT PRIMARY KEY,
  tenant_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  conversation_id TEXT NOT NULL,
  action TEXT NOT NULL,
  created_at INTEGER NOT NULL
);

-- Indeks untuk kelajuan carian
CREATE INDEX IF NOT EXISTS idx_msg_conv ON messages_encrypted(conversation_id, created_at);
CREATE INDEX IF NOT EXISTS idx_conv_tenant ON conversations(tenant_id, updated_at);
