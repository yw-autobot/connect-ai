import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
CONFIG = HERE / "tavily_account.json"


def main():
    cfg = json.loads(CONFIG.read_text(encoding="utf-8")) if CONFIG.exists() else {}
    token = str(cfg.get("TAVILY_API_KEY", "")).strip()
    depth = str(cfg.get("TAVILY_SEARCH_DEPTH", "basic")).strip() or "basic"
    print("Tavily/Web Research is enabled.")
    print(f"- api_key: {'SET' if token else 'MISSING'}")
    print(f"- search_depth: {depth}")
    print("This connection is read-only. This diagnostic does not make a web request.")


if __name__ == "__main__":
    main()
