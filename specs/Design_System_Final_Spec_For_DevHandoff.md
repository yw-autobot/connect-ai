# ✨ Trend pioneer: 최종 디자인 시스템 명세서 (V2.0)
**[목표]**: 개발팀이 Funnel의 모든 컴포넌트를 구현하는 데 필요한 단일 진실 공급원(Single Source of Truth).
**[적용 범위]**: 랜딩 페이지 전반 (Hero Section, Features Grid, Pricing/CTA Block 등 모든 상호작용 요소).

---

## 🎨 1. 디자인 토큰 및 컬러 팔레트 (Design Tokens & Color)

| 용도 | 역할 | HEX 코드 | 사용 원칙 / 심리 효과 | [근거: Self-RAG] |
| :--- | :--- | :--- | :--- | :--- |
| **Base Background** | 전문성, 권위. 기본 배경색. | `#1A1A1A` (Dark Gray) | 모든 텍스트와 UI가 놓이는 기반. 깊이감을 부여함. | [근거: Self-RAG] |
| **Primary Text** | 본문 및 주요 정보. | `#E0E0E0` (Off-White) | 다크 모드 환경에서의 가독성을 극대화. | [근거: Designer 개인 메모리] |
| **Pain Point Accent (🚨)** | 문제 제기, 충격, 경고. | `#FF5722` (Orange-Red) | 위험/문제점을 즉각적으로 시각화하여 주의를 집중시킴. | [근거: Self-RAG] |
| **Solution Accent (✅)** | 성공, 해결책, 수익(Money). | `#4CAF50` (Emerald Green) | 긍정적 전환점, 성취감, 그리고 '돈'과 관련된 키워드에만 사용. CTA의 메인 강조색. | [근거: Self-RAG] |
| **Hover/Interactive** | 버튼이나 링크의 상호작용 시 변화. | `#3A3A3A` (Darker Gray) | 미묘한 어두운 변화로 클릭 가능한 영역임을 인지시킴. | [추측] |

## 🔡 2. 타이포그래피 시스템 (Typography System)

**[선택된 폰트]: Pretendard 또는 Inter (Web Safe)**
*   **전체 규칙**: 모든 텍스트는 흰색 배경의 일반적인 웹 환경에서 읽기 쉬운 산세리프 계열을 사용하며, 다크 모드에 최적화되어야 합니다.

| 요소 | 크기 (px) | Weight | 색상 적용 | 용도 및 주의사항 |
| :--- | :--- | :--- | :--- | :--- |
| **H1 (Hero Title)** | 48px - 60px | Bold (700) | `#E0E0E0` / 강조 시 `#FF5722` | 페이지의 핵심 메시지. 가장 강렬하고 크게 배치. |
| **H2 (Section Title)** | 30px - 40px | Semi-Bold (600) | `#E0E0E0` | 섹션 구분을 위한 제목. Pain Point와 Solution으로 구분하여 사용. |
| **Body Large** | 18px | Regular (400) | `#E0E0E0` | 가장 중요한 설명 문구. 충분한 여백 확보 필수. |
| **Body Small/Label** | 14px | Regular (400) | `#B3B3B3` | 라벨, 보조 텍스트, 가격의 단위(만원). 중요도가 낮음. |
| **CTA Button Text** | 20px | Bold (700) | 흰색 (`#FFFFFF`) | CTA 버튼 내부 텍스트는 배경과 최대 대비를 이루어야 함. |

## 🧱 3. 핵심 컴포넌트 사양 (Core Components Spec)

### 3.1. Primary Button Component (CTA)
*   **용도**: 사용자가 최종적으로 취하는 행동 유도(구매, 신청 등).
*   **기본 상태 (Default)**:
    *   배경색: `#4CAF50` (Solution Accent)
    *   텍스트색: `#FFFFFF`
    *   패딩: `16px 32px`
    *   라운딩: `8px`
    *   커서 포인터 (`cursor: pointer`) 필수.
*   **호버 상태 (Hover)**:
    *   배경색: `#5ca470` (약간 어둡게)
    *   트랜지션 효과: 부드러운 변화(`transition: background-color 0.2s ease;`) 적용 필수.
*   **비활성화 상태 (Disabled)**:
    *   배경색: `#3A3A3A` (Darker Gray)
    *   커서: `not-allowed`.

### 3.2. Pain Point Banner Component
*   **용도**: 페이지 상단 또는 섹션 시작 시, 사용자의 불안감을 극대화하여 문제 제기.
*   **구조적 요구사항**:
    1.  배경색: `#FF5722` (Pain Accent)
    2.  패딩: `30px 40px` (상하 여백 확보)
    3.  내부 요소 레이아웃: **[🚨 경고 아이콘]** + H1(H2급 크기, 흰색) + Body Large(문제 설명).
*   **개발 주안점**: 이 배너는 모든 페이지 상단에 배치되는 '시스템적 구조'여야 하며, 단순한 텍스트 블록이 아님을 인지할 것.

### 3.3. Pricing Grid Component (가장 중요)
*   **용도**: 상품 옵션 비교 및 구매 결정 유도. 전환율의 핵심.
*   **구조적 요구사항**: 최소 3개 컬럼 구조 필수.
    1.  **Column Structure:** [Starter Kit] | [Core Pack] | **[⭐ Best Value (강조)]**
    2.  **Best Value 강조 (필수)**: 최적의 상품(Core Pack)에는 반드시 배경색을 `#4CAF50`로 채우고, 테두리(`border`)를 두껍게 처리하여 시각적으로 가장 눈에 띄게 해야 함.
    3.  **Pricing Display**: 가격은 `[가격] 만원/월` 형태로 명시하고, 단위를 Body Small(14px)로 처리할 것.

---

## ✅ 4. QA 및 개발 가이드라인 (Developer Checklist)

개발팀이 이 체크리스트를 통과했는지 반드시 확인해야 합니다.
*   [ ] **Accessibility Check**: 모든 중요 텍스트의 명암비(Contrast Ratio)가 WCAG AA 레벨 이상인지 검증할 것.
*   [ ] **State Tracking**: 장바구니 담기, 상품 옵션 선택 등 사용자 액션 발생 시 `useConversionTracker` 훅을 호출하는 로직이 모든 컴포넌트에 적용되었는지 확인. (코다리에게 직접 요청)
*   [ ] **Responsive Design**: 모바일 환경(375px 폭 기준)에서 Pain Banner의 레이아웃이 깨지지 않고, H1 타이포그래피가 적절히 축소되는지 검증할 것.

***