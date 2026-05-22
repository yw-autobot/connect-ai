import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
CONFIG = HERE / "deployment_account.json"


def main():
    cfg = json.loads(CONFIG.read_text(encoding="utf-8")) if CONFIG.exists() else {}
    provider = str(cfg.get("DEPLOY_PROVIDER", "manual")).strip() or "manual"
    safety = cfg.get("_safety", {})
    print("Deployment automation is enabled.")
    print(f"- provider: {provider}")
    print(f"- vercel_token: {'SET' if str(cfg.get('VERCEL_TOKEN', '')).strip() else 'MISSING'}")
    print(f"- netlify_token: {'SET' if str(cfg.get('NETLIFY_AUTH_TOKEN', '')).strip() else 'MISSING'}")
    print(f"- cloudflare_token: {'SET' if str(cfg.get('CLOUDFLARE_API_TOKEN', '')).strip() else 'MISSING'}")
    print(f"- approval_required: {safety.get('REQUIRE_APPROVAL', True)}")
    print(f"- dry_run: {safety.get('DRY_RUN', True)}")
    print("Production deploys, DNS changes, and infrastructure deletes are gated. This diagnostic does not deploy.")


if __name__ == "__main__":
    main()
