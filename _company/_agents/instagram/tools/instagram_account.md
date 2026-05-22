# Instagram Account

Instagram uses this connection for Meta Graph API planning, analytics, and gated publishing workflows.

Configuration is managed in `instagram_account.json` through **Connect AI: 외부 연결 (API 키)**.

Safety defaults:
- `DRY_RUN`: true
- `REQUIRE_APPROVAL`: true
- `ALLOW_PUBLISH`: false
- `ALLOW_DM_SEND`: false

This diagnostic tool only checks whether credentials are present. It does not publish, send DMs, or reply to comments.
