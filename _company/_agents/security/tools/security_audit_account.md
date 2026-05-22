# Security Audit Account

Security uses this configuration to control audit behavior and gated fix workflows.

Configuration is managed in `security_audit_account.json` through **Connect AI: 외부 연결 (API 키)**.

Safety defaults:
- `DRY_RUN`: true
- `REQUIRE_APPROVAL`: true
- `ALLOW_DESTRUCTIVE`: false
- `ALLOW_OFFENSIVE`: false

This diagnostic tool only reports configured policy. It does not exploit, delete, exfiltrate, or change permissions.
