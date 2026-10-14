-- BahBorak knowledge base seed
DELETE FROM public_kb;

INSERT INTO public_kb (id, topic, question, answer, tags, priority) VALUES
('kb_overview', 'overview', 'What is BahBorak?',
'BahBorak is a WhatsApp business automation platform for Malaysian SMEs. It handles customer questions automatically — order status, pricing, hours, bookings — using rules and AI. No need to hire extra support staff.', 'overview,intro', 100),

('kb_problem', 'value', 'What problem does BahBorak solve?',
'Small businesses get flooded with repetitive WhatsApp questions. Owners cannot reply fast enough. BahBorak answers common questions instantly, 24/7, so owners focus on their business.', 'value,roi', 95),

('kb_philosophy', 'philosophy', 'How does the AI work?',
'Rules control. AI advises. You decide. Deterministic rules handle standard replies. The AI assistant suggests replies for tricky questions — but you approve before send. No black box.', 'philosophy,ai', 90),

('kb_features', 'features', 'What features does BahBorak have?',
'Auto-reply, rule engine, AI assistant (Bot), multi-business support, audit log, team access with roles. Everything runs in your browser. No installation needed.', 'features', 90),

('kb_pricing', 'pricing', 'What does BahBorak cost?',
'Four plans: Free (RM0, 100 messages/mo), Starter (RM49/mo, 1,000 messages), Growth (RM199/mo, 10,000 messages, AI assistant), Business (RM499/mo, unlimited). Cancel anytime.', 'pricing,plans', 90),

('kb_data', 'data', 'Is my customer data safe?',
'Yes. Each business gets its own isolated workspace. Your customer data stays yours. We never share it with other businesses. Full audit log of every action.', 'data,privacy', 95),

('kb_setup', 'setup', 'How long does setup take?',
'Sign up, connect your WhatsApp Business number, set your first rules. Most businesses are live within a day. No technical skills required.', 'setup,onboarding', 85),

('kb_whatsapp', 'whatsapp', 'Does it work with my existing WhatsApp?',
'Yes. BahBorak connects to the official WhatsApp Business API. You keep your number and your existing conversations.', 'whatsapp,integration', 95),

('kb_languages', 'languages', 'Does it support Bahasa Malaysia?',
'Yes. BahBorak supports Bahasa Malaysia, English, Chinese, and Tamil. You can set replies in any language your customers use.', 'languages', 80),

('kb_industries', 'industries', 'What businesses use BahBorak?',
'F&B, retail, services, clinics, salons, online sellers, and any Malaysian SME that handles customer questions on WhatsApp.', 'industries', 80),

('kb_team', 'team', 'Can my staff use it?',
'Yes. Invite staff with roles — owner, admin, agent. Control who sees what and who replies to customers.', 'team,roles', 85),

('kb_trial', 'trial', 'Is there a free trial?',
'Yes. Free plan is permanent — 100 messages per month, no credit card. Upgrade only when you need more.', 'trial,free', 90);
