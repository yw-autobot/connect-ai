import sys as _connect_ai_sys
for _connect_ai_stream in (_connect_ai_sys.stdout, _connect_ai_sys.stderr):
    try:
        _connect_ai_stream.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
CONFIG = HERE / "mobile_settings.json"


def main():
    cfg = json.loads(CONFIG.read_text(encoding="utf-8")) if CONFIG.exists() else {}
    print("Mobile settings are enabled.")
    print(f"- default_platform: {cfg.get('DEFAULT_PLATFORM', 'expo')}")
    print(f"- default_test_target: {cfg.get('DEFAULT_TEST_TARGET', 'mobile-first')}")
    print(f"- store_release_approval: {cfg.get('REQUIRE_APPROVAL_FOR_STORE_RELEASE', 'true')}")
    print("This diagnostic does not build, sign, submit, or release apps.")


if __name__ == "__main__":
    main()
