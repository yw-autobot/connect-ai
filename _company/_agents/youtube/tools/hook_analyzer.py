#!/usr/bin/env python3
# version: hook_analyzer_v1
"""유튜브 영상 후킹(첫 30초) 패턴 자동 분석.

config:
  CHANNEL_HANDLE — @your-handle
  RECENT_N — 분석할 최근 영상 수 (기본 5)
"""
import os, json, sys

# Windows cp949 콘솔에서 이모지 출력 시 UnicodeEncodeError 방지
if sys.stdout and hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
if sys.stderr and hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8")

HERE = os.path.dirname(os.path.abspath(__file__))
CONFIG = os.path.join(HERE, "hook_analyzer.json")
ACCOUNT = os.path.join(HERE, "youtube_account.json")

def _load():
    if os.path.exists(CONFIG):
        with open(CONFIG, "r", encoding="utf-8") as f:
            return json.load(f)
    return {}

def main():
    cfg = _load()
    handle = cfg.get("CHANNEL_HANDLE", "").strip()
    n = int(cfg.get("RECENT_N", 5))
    if not handle:
        # hook_analyzer.json에 핸들이 없으면 youtube_account.json에서 가져옴
        if os.path.exists(ACCOUNT):
            with open(ACCOUNT, "r", encoding="utf-8") as f:
                acct = json.load(f)
            handle = (acct.get("MY_CHANNEL_HANDLE") or "").strip()
        if not handle:
            print("❌ CHANNEL_HANDLE 비어있음. hook_analyzer.json 또는 youtube_account.json에 핸들을 입력하세요.", file=sys.stderr)
            sys.exit(1)
        print(f"ℹ️  youtube_account.json에서 핸들 사용: {handle}", file=sys.stderr)
    # 실제 분석 로직은 별도 — 여기는 시드 스크립트 데모
    print(f"🎬 분석 시작: {handle} 최근 {n}개 영상")
    print("# 결과")
    print("- 첫 5초 후크 강도: 평균 7.2/10")
    print("- 평균 첫 30초 유지율: 62%")
    print("- 권장: 첫 컷 5초 이내, 결과 미리보기 1개 추가")

if __name__ == "__main__":
    main()
