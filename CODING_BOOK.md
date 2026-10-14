# BahBorak Coding Book

Log masalah + fix. Format: **Masalah → Punca → Fix**.

---

## 1. Heredoc terputus masa paste

**Masalah:** Fail rosak separuh, delimiter bercampur dengan content.

**Punca:** Paste panjang, delimiter clash.

**Fix:** Guna Python `open().write()` untuk fail panjang. Atau delimiter unik (ZZZ_XXX_ZZZ).

---

## 2. Nested backtick dalam template literal

**Masalah:** SyntaxError: Unexpected token 'class'.

**Punca:** Template literal guna backtick dalam backtick.

**Fix:** Guna string concat: '<span class="' + cls + '">' + s + '</span>'.

---

## 3. Route order — public endpoint sebelum auth

**Masalah:** /api/bot/public bagi 401.

**Punca:** Route selepas requireAuth.

**Fix:** Public routes sebelum requireAuth.

---

## 4. Token CF vs API_TOKEN generic

**Masalah:** Wrangler error 6111.

**Punca:** API_TOKEN bukan token CF.

**Fix:** Guna /root/.cf-key.

---

## 5. Wrangler lama — observability.issue_detection

**Masalah:** Error "Unexpected fields found in observability field: issue_detection".

**Punca:** Wrangler 4.147 tak support field baru.

**Fix:** Buang blok, tinggal `[observability] enabled = true` sahaja.

---

## 6. D1 list kosong sebab wrangler.toml rosak

**Masalah:** d1 list return empty.

**Punca:** wrangler.toml ada config invalid, command gagal parse.

**Fix:** Fix toml dulu, baru list.

---

## Best Practice

1. Verify setiap fail lepas tulis: `node --check`.
2. Guna `wc -l` detect fail terpotong.
3. Guna delimiter unik untuk heredoc.
4. Simpan D1 schema dalam migrations/.
5. Audit log → D1 + R2.
6. Bot = advisor only. Rules = controller.
7. Jangan simpan API key plaintext.
8. Guna Python write() untuk fail panjang.
