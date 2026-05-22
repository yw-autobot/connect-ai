# GitHub Account

Developer uses this connection for repository, issue, PR, and CI workflow work.

Configuration is managed in `github_account.json` through **Connect AI: 외부 연결 (API 키)**.

Safety defaults:
- `DRY_RUN`: true
- `REQUIRE_APPROVAL`: true
- Destructive repository actions are blocked unless a future approval wrapper explicitly allows them.

This diagnostic tool only checks whether credentials are present. It does not push, merge, delete, or modify GitHub.
