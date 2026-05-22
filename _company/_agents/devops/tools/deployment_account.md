# Deployment Account

DevOps uses this connection for deployment planning and future gated deployment wrappers.

Configuration is managed in `deployment_account.json` through **Connect AI: 외부 연결 (API 키)**.

Safety defaults:
- `DRY_RUN`: true
- `REQUIRE_APPROVAL`: true
- `ALLOW_PRODUCTION_DEPLOY`: false
- `ALLOW_DNS_CHANGE`: false

This diagnostic tool only checks provider and credential presence. It does not deploy.
