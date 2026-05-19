# 🌐 Commerce API Integration Contract (MVP)

## 🎯 목표: 판매 퍼널의 각 단계별 데이터 플로우를 정의합니다.

### A. [`/api/v1/product-details`] - 상품 정보 조회 엔드포인트
*   **용도:** 랜딩 페이지에서 Core Pack 및 Bundle의 상세 정보를 로드할 때 사용. (읽기 전용)
*   **요청 파라미터:** `productId` (string, 필수), `bundleId` (string, 선택)
*   **응답 스키마:** `./src/schemas/productSchema.json` 전체 구조를 준수해야 함.

### B. [`/api/v1/checkout-init`] - 결제 세션 초기화 엔드포인트
*   **용도:** 고객이 '구매하기' 버튼을 누를 때, 실제 결제를 시작하기 위해 임시 주문(Order) 정보를 생성합니다. (POST 요청)
*   **요청 Body:** 
    ```json
    {
      "items": [
        {"productId": "...", "quantity": 1} // 구매할 상품 ID와 수량
      ],
      "userEmail": "string", // 사용자 이메일로 추적 목적 사용
      "currency": "KRW"
    }
    ```
*   **응답 Body:** `sessionId` (string, 필수), `checkoutUrl` (string)

### C. [`/api/v1/lead-capture`] - 리드 정보 등록 엔드포인트
*   **용도:** Starter Kit 다운로드 폼 제출 시 데이터를 CRM에 기록합니다. (POST 요청)
*   **요청 Body:** `./src/schemas/leadCaptureSchema.json`의 모든 필드를 포함해야 합니다.
*   **성공 응답:** `{ "success": true, "message": "Lead captured successfully." }`

### D. [`/api/v1/validate-email`] - 이메일 유효성 검사 엔드포인트
*   **용도:** 폼 제출 전 클라이언트 측 및 서버 측에서 필수적으로 호출합니다. (GET 요청)
*   **요청 파라미터:** `email` (string, 필수)
*   **응답 Body:** `{ "isValid": boolean, "reason": "..." }`

---

### 📝 다음 단계: 컴포넌트 통합 및 테스트 환경 구축
이제 비즈니스 로직과 데이터 구조가 확정되었으므로, 다음 스텝에서는 이 계약을 바탕으로 **실제로 작동하는 핵심 컴포넌트를 구현**하고, 이를 검증할 수 있는 최소한의 API Mocking/Mock Service Worker(MSW) 환경을 구축해야 합니다.

*   **다음 액션:** `LandingPage`의 주요 섹션을 구성하는 핵심 React 컴포넌트 (`<PricingCard>`, `<LeadForm>`)를 생성하고, 정의된 스키마와 API 계약에 맞게 데이터 흐름을 구현할 준비를 합니다.