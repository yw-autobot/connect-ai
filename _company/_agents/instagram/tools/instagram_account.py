import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
CONFIG = HERE / "instagram_account.json"


def main():
    cfg = json.loads(CONFIG.read_text(encoding="utf-8")) if CONFIG.exists() else {}
    token = str(cfg.get("META_ACCESS_TOKEN", "")).strip()
    business_id = str(cfg.get("INSTAGRAM_BUSINESS_ID", "")).strip()
    safety = cfg.get("_safety", {})
    print("Instagram account tool is enabled.")
    print(f"- access_token: {'SET' if token else 'MISSING'}")
    print(f"- business_id: {business_id or 'MISSING'}")
    print(f"- approval_required: {safety.get('REQUIRE_APPROVAL', True)}")
    print(f"- dry_run: {safety.get('DRY_RUN', True)}")
    print("Publishing, DM sends, and comment replies are gated. This diagnostic does not post anything.")


if __name__ == "__main__":
    main()
