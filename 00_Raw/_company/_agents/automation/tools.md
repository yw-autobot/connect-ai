# 🔁 Automation — 도구 매니페스트

_Automation 에이전트가 어떤 도구를 어디까지 자율적으로 쓸 수 있는지 정의합니다._
_매번 시스템 프롬프트로 주입되며, 텔레그램에서 `/tools`로 현재 상태 확인 가능._

---

## 자율도 레벨

AUTONOMY_LEVEL: 2

| 값 | 의미 |
|---|---|
| 0 | Off — 도구 전체 비활성 (이 에이전트는 채팅만) |
| 1 | Read-only — 읽기·분석·보고만, 외부에 쓰기 X |
| 2 | Draft — 초안 작성 후 사용자 승인 게이트 통과해야 실행 ⭐ 권장 기본값 |
| 3 | Auto — 화이트리스트 안에서 사용자 승인 없이 실행 |

> 위 `AUTONOMY_LEVEL` 줄의 숫자(0~3)를 직접 바꾸면 다음 호출부터 적용됩니다.

---

## 사용 가능한 도구

### `mcp_tool_builder`
반복 업무를 MCP/API 도구 사양으로 변환

- `enabled`: true
- `requires_credentials`: `config.md` 참조

### `workflow_mapper`
수동 업무 흐름을 승인형 자동화 단계로 분해

- `enabled`: true
- `requires_credentials`: `config.md` 참조

### `api_connector`
외부 SaaS API 연동 설계와 인증 방식 점검

- `enabled`: true
- `requires_credentials`: `config.md` 참조

### `automation_risk_review`
자동화의 발송·삭제·결제·권한 변경 리스크 검토

- `enabled`: true
- `requires_credentials`: `config.md` 참조

### `gated_external_action`
외부 API 쓰기 작업을 dry-run으로 검토하고 승인 큐에 등록

- `enabled`: true
- `requires_credentials`: `config.md` 참조


---

## 안전 규칙 (모든 레벨 공통, 절대 우회 X)

- **삭제·배포·발송**(rm, deploy --prod, send, publish) 류는 자율도와 무관하게 **항상 승인 게이트**.
- 외부 API 호출 전 `config.md`의 토큰 존재 여부 확인.
- 모든 외부 행동은 `_agents/automation/activity.log`에 한 줄 기록 (감사용).
- 승인 대기 액션은 `approvals/pending/` 에 저장 → 텔레그램 `/approvals` 로 조회.

---

_레벨을 어떻게 골라야 할지 모르겠다면 `2 (Draft)`가 안전한 시작점입니다._
