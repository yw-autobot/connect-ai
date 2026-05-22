import sys as _connect_ai_sys
for _connect_ai_stream in (_connect_ai_sys.stdout, _connect_ai_sys.stderr):
    try:
        _connect_ai_stream.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
CONFIG = HERE / "github_account.json"


def main():
    cfg = json.loads(CONFIG.read_text(encoding="utf-8")) if CONFIG.exists() else {}
    token = str(cfg.get("GITHUB_TOKEN", "")).strip()
    repo = str(cfg.get("GITHUB_DEFAULT_REPO", "")).strip()
    safety = cfg.get("_safety", {})
    print("GitHub account tool is enabled.")
    print(f"- token: {'SET' if token else 'MISSING'}")
    print(f"- default_repo: {repo or 'MISSING'}")
    print(f"- approval_required: {safety.get('REQUIRE_APPROVAL', True)}")
    print(f"- dry_run: {safety.get('DRY_RUN', True)}")
    print("Write actions are gated. This diagnostic does not push, merge, delete, or create remote changes.")


if __name__ == "__main__":
    main()
