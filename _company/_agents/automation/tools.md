# 🔁 Automation — 도구 매니페스트

## 자율도 레벨

AUTONOMY_LEVEL: 2

## 사용 가능한 도구

### `mcp_tool_builder`
반복 업무를 MCP/API 도구 사양으로 변환.

### `workflow_mapper`
수동 업무 흐름을 승인형 자동화 단계로 분해.

### `api_connector`
외부 SaaS API 연동 설계와 인증 방식 점검.

### `automation_risk_review`
자동화의 발송·삭제·결제·권한 변경 리스크 검토.

### `gated_external_action`
외부 API 쓰기 작업을 dry-run으로 검토하고 승인 큐에 등록합니다.

## 안전 규칙

- 기본은 dry-run입니다.
- 외부 쓰기 작업은 Security 또는 CEO 승인 후에만 실행합니다.
