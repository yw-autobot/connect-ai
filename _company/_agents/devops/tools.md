# 🚀 DevOps — 도구 매니페스트

## 자율도 레벨

AUTONOMY_LEVEL: 2

## 사용 가능한 도구

### `ci_diagnose`
CI 실패 로그 수집과 원인 분류.

### `deploy_plan`
배포 전 체크리스트와 롤백 계획 작성.

### `docker_pack`
Dockerfile/compose 생성과 로컬 실행 검증.

### `observability_check`
로그·메트릭·알림·헬스체크 구성 점검.

### `gated_deploy`
preview/dry-run 배포를 우선 수행하고 production 배포는 승인 게이트를 거쳐 실행합니다.

## 안전 규칙

- `deploy --prod`, DNS 변경, 인프라 삭제, 비밀값 변경은 승인 게이트 필수.
- 기본 응답은 계획과 dry-run 중심입니다.
