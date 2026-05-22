import sys as _connect_ai_sys
for _connect_ai_stream in (_connect_ai_sys.stdout, _connect_ai_sys.stderr):
    try:
        _connect_ai_stream.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
CONFIG = HERE / "security_audit_account.json"


def main():
    cfg = json.loads(CONFIG.read_text(encoding="utf-8")) if CONFIG.exists() else {}
    safety = cfg.get("_safety", {})
    print("Security audit tool is enabled.")
    print(f"- audit_mode: {cfg.get('SECURITY_AUDIT_MODE', 'gated_fix')}")
    print(f"- dependency_audit: {cfg.get('ALLOW_DEPENDENCY_AUDIT', 'true')}")
    print(f"- secret_scan: {cfg.get('ALLOW_SECRET_SCAN', 'true')}")
    print(f"- approval_required: {safety.get('REQUIRE_APPROVAL', True)}")
    print(f"- dry_run: {safety.get('DRY_RUN', True)}")
    print(f"- offensive_allowed: {safety.get('ALLOW_OFFENSIVE', False)}")
    print("This diagnostic does not exploit, delete, exfiltrate, or change permissions.")


if __name__ == "__main__":
    main()
