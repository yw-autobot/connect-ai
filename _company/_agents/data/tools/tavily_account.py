import sys as _connect_ai_sys
for _connect_ai_stream in (_connect_ai_sys.stdout, _connect_ai_sys.stderr):
    try:
        _connect_ai_stream.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

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
