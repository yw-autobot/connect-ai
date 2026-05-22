import sys as _connect_ai_sys
for _connect_ai_stream in (_connect_ai_sys.stdout, _connect_ai_sys.stderr):
    try:
        _connect_ai_stream.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
CONFIG = HERE / "rube_account.json"


def main():
    cfg = json.loads(CONFIG.read_text(encoding="utf-8")) if CONFIG.exists() else {}
    token = str(cfg.get("RUBE_API_KEY", "")).strip()
    toolkits = str(cfg.get("RUBE_DEFAULT_TOOLKITS", "")).strip()
    safety = cfg.get("_safety", {})
    print("Rube/Composio automation is enabled.")
    print(f"- api_key: {'SET' if token else 'MISSING'}")
    print(f"- default_toolkits: {toolkits or 'MISSING'}")
    print(f"- approval_required: {safety.get('REQUIRE_APPROVAL', True)}")
    print(f"- dry_run: {safety.get('DRY_RUN', True)}")
    print("External writes are gated. This diagnostic does not call SaaS APIs.")


if __name__ == "__main__":
    main()
