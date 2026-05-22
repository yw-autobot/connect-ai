# API Connections Catalog

Use the Connect AI command `Connect AI: 외부 연결 (API 키)` to enter and manage credentials.

Secrets are stored in the existing per-agent API files, not in this catalog.

## Canonical Files

| Service | Owner agent | Canonical config |
|---|---|---|
| Telegram | secretary | `_agents/secretary/tools/telegram_setup.json` |
| Google Calendar | secretary | `_agents/secretary/tools/google_calendar_write.json` |
| YouTube Data / OAuth | youtube | `_agents/youtube/tools/youtube_account.json` |
| PayPal | business | `_agents/business/tools/paypal_revenue.json` |
| Gemini | business | `_agents/business/tools/gemini_account.json` |
| GitHub | developer | `_agents/developer/tools/github_account.json` |
| Instagram / Meta Graph | instagram | `_agents/instagram/tools/instagram_account.json` |
| Deployment | devops | `_agents/devops/tools/deployment_account.json` |
| Rube / Composio | automation | `_agents/automation/tools/rube_account.json` |
| Tavily / Web Research | data | `_agents/data/tools/tavily_account.json` |
| Security Audit | security | `_agents/security/tools/security_audit_account.json` |

## Safety Defaults

- Read-only API calls may run when credentials are present.
- Send, publish, deploy, delete, payment, permission, and credential-change actions are approval-gated.
- New external write automations start in dry-run mode.
- Production deploys require explicit approval even if DevOps autonomy is set higher.
- Security tools may draft and validate fixes, but offensive or destructive actions remain blocked.
