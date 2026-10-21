CREATE TABLE IF NOT EXISTS customers (
  id TEXT PRIMARY KEY,
  phone TEXT UNIQUE NOT NULL,
  name TEXT,
  otp TEXT,
  otp_expires_at INTEGER,
  created_at INTEGER NOT NULL
);
