# Rube / Composio Account

Automation uses this connection to design and eventually run SaaS workflow automations.

Configuration is managed in `rube_account.json` through **Connect AI: 외부 연결 (API 키)**.

Safety defaults:
- `DRY_RUN`: true
- `REQUIRE_APPROVAL`: true
- `ALLOW_EXTERNAL_WRITE`: false

This diagnostic tool only checks whether credentials are present. It does not call external SaaS APIs.
