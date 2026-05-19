// src/components/common/PricingSection.tsx

import React from 'react';
import { useMiniTemplateContext } from '@/context/MiniTemplateContext'; // [가정] 장바구니 Context 경로
import { Button, Card } from '@/ui/ui-components'; // [가정] 재사용 UI 컴포넌트

// Pricing Tier 구조 정의 (Type Safety 확보)
interface PriceTier {
  name: string;
  description: string;
  price: number;
  features: string[];
  isRecommended: boolean; // Core Pack 강조를 위한 플래그
}

// 🌟 Designer 스펙 기반의 데이터 정의 (시각적 무게 중심 이동)
const pricingTiers: PriceTier[] = [
  {
    name: "Starter Kit",
    description: "개인 학습 및 실험에 최적화된 기본 패키지입니다.",
    price: 49,
    features: ["핵심 기능 접근 (Basic)", "월 1회 업데이트", "기본 가이드 제공"],
    isRecommended: false,
  },
  {
    name: "Core Pack", // ★ 권장 플래그가 핵심 역할을 함
    description: "최적의 수익화 및 시스템 구축을 위한 필수 솔루션입니다. (강력 추천)",
    price: 199,
    features: ["모든 기능 접근 (Premium)", "무제한 업데이트", "전담 컨설팅 포함"],
    isRecommended: true,
  },
  {
    name: "Pro Pack Enterprise",
    description: "대규모 팀 및 기업 단위 운영을 위한 엔터프라이즈 솔루션입니다.",
    price: 999,
    features: ["맞춤형 API 연동", "24/7 전담 지원", "독점 트렌드 리포트"],
    isRecommended: false,
  },
];

/**
 * PricingSection 컴포넌트: 핵심 가치 비교 섹션을 렌더링합니다.
 * 비즈니스 로직(MiniTemplateContext)과의 통합을 염두에 두고 설계되었습니다.
 */
const PricingSection: React.FC = () => {
  // Context Hook 사용 (장바구니/구매 로직 연결 준비)
  const { addToCart, cartItems } = useMiniTemplateContext();

  return (
    <section 
      className="py-20 bg-[#1A1A1A] text-white" // 스펙 기반 배경색: 가장 어두운 그레이로 섹션 시작
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* 헤더 */}
        <h2 className="text-center text-3xl font-bold mb-4">
          🚀 최고의 성과를 위한 시스템 구축. 가격을 비교하세요.
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
          어떤 목표를 가지고 계신가요? 저희 Funnel은 고객의 Pain Point를 해결하고, 원하는 솔루션에 도달하도록 설계되었습니다.
        </p>

        {/* 🌟 Pricing Grid 컨테이너 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
          {pricingTiers.map((tier, index) => {
            const cardClasses = `
              ${!tier.isRecommended ? 'bg-[#252525] border border-gray-700' : 'bg-[#1A1A1A] shadow-[0_0_30px_rgba(40,200,100,0.3)]'}
              ${tier.isRecommended ? 'scale-[1.03] ring-4 ring-green-500' : ''} 
            `;

            return (
              <Card key={index} className={`p-8 rounded-xl ${cardClasses}`}>
                {/* 타이틀 및 추천 배지 */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                  {tier.isRecommended && (
                    <span className="inline-block mt-2 px-4 py-1 bg-green-600 text-sm font-semibold rounded-full">
                      ✨ 가장 많이 선택됨 (추천)
                    </span>
                  )}
                </div>

                {/* 가격 정보 */}
                <div className="mb-8">
                  <span className="text-5xl font-extrabold text-green-400">${tier.price}</span>
                  <p className="text-gray-400 mt-1 text-lg">/월 (첫 달 70% 할인)</p>
                </div>

                {/* 기능 목록 */}
                <ul role="list" className="space-y-3 mb-10">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-200">
                      <svg className={`h-5 w-5 flex-shrink-0 mr-2 ${tier.isRecommended ? 'text-green-400' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA 버튼 (전환 추적 로직 통합 지점) */}
                <button 
                  onClick={() => addToCart(tier.name, tier.price)} // Context API 연동
                  className="w-full py-3 rounded-lg text-xl font-bold transition duration-300 bg-green-500 hover:bg-green-600 text-gray-900"
                >
                  지금 시작하기 (${tier.name} 장바구니 담기)
                </button>
              </Card>
            );
          })}
        </div>

        {/* 하단 유도 문구 */}
        <div className="text-center mt-16 pt-8 border-t border-gray-700">
             <p className='text-lg text-gray-400'>
                결정하기 어렵다면? <a href="/contact" className='text-green-400 hover:underline font-semibold'>무료 데모 신청</a>을 통해 전문가 상담을 받아보세요.
            </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;