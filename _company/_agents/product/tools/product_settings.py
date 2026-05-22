import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
CONFIG = HERE / "product_settings.json"


def main():
    cfg = json.loads(CONFIG.read_text(encoding="utf-8")) if CONFIG.exists() else {}
    print("Product settings are enabled.")
    print(f"- priority_framework: {cfg.get('DEFAULT_PRIORITY_FRAMEWORK', 'RICE')}")
    print(f"- release_scope: {cfg.get('DEFAULT_RELEASE_SCOPE', 'small')}")
    print(f"- roadmap_ceo_approval: {cfg.get('REQUIRE_CEO_APPROVAL_FOR_ROADMAP', 'true')}")
    print("This diagnostic does not change roadmap or product scope.")


if __name__ == "__main__":
    main()
