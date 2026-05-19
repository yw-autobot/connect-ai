// components/sections/PricingSection.tsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../common/ProductCard'; // 가상의 상품 카드를 사용합니다.
import { Pain, Solution } from '@/styles/theme';

/**
 * @component PricingSection
 * @description 랜딩 페이지의 핵심 전환 요소. 비즈니스 로직(가격, 장바구니)과 Design System 규칙을 통합합니다.
 * 💡 WHY: 이 섹션은 사용자가 '구매 결정'을 하는 가장 중요한 개입점(Intervention Point)이므로, 오류 처리와 추적 기능이 필수입니다.
 */

interface PricingSectionProps {
  title: string; // 예: "시스템 솔루션 비용"
}

export const PricingSection: React.FC<PricingSectionProps> = ({ title }) => {
  const { cartItems, updateCart } = useCart();
  const [isLoading, setIsLoading] = React.useState(false);

  // 💰 비즈니스 로직: 총합 계산 (가드 처리 필수)
  const calculateTotal = (): number => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  // 🚀 전환 추적 Hook 호출 지점 (실제 환경에서는 외부 라이브러리 연동 필요)
  const trackConversion = (action: string, details: any) => {
    console.log(`[TRACKING] Conversion Tracked: ${action}`, details);
    // 실제 구현 시 Google Analytics 또는 전문 추적 훅 호출 위치입니다.
  };

  // ✨ 장바구니에 상품 추가 핸들러 (비즈니스 로직 실행)
  const handleAddToCart = (product: Product) => {
    if (isLoading) return;
    setIsLoading(true);
    
    // 실제 비동기 API 호출을 시뮬레이션합니다.
    setTimeout(() => {
      updateCart(product, 1); // CartContext의 updateCart 로직 사용 가정
      trackConversion('ADD_TO_CART', { productId: product.id, price: product.price });
      setIsLoading(false);
    }, 300);
  };

  return (
    <section className="py-20 bg-gray-50" style={{ borderTop: `4px solid ${Pain.color}` }}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Pain Point 강조 타이틀 */}
        <h2 className={`text-3xl font-extrabold text-${Solution.textColor} mb-4`}>
          {title}: 이제 불안함은 끝입니다.
        </h2>
        <p className="mb-12 max-w-3xl text-gray-600">
          우리의 시스템 솔루션이 여러분의 비효율성을 어떻게 해결하는지, 명확한 비용 구조와 함께 제시합니다.
        </p>

        {/* 상품 목록 및 CTA 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 예시 ProductCard 1 (여기서 실제 제품 정보를 받거나, 별도로 가져와야 합니다) */}
          <ProductCard product={/* ... 상품 데이터 1 ... */ } onAddToCart={handleAddToCart} />
          <ProductCard product={/* ... 상품 데이터 2 ... */ } onAddToCart={handleAddToCart} />
          {/* 추가 상품 카드... */}
        </div>

        {/* 최종 구매 CTA 섹션 (Solution 강조) */}
        <div className="mt-16 p-8 bg-white shadow-xl rounded-lg border-l-4" style={{ borderColor: Solution.color }}>
          <h3 className={`text-2xl font-bold text-${Solution.textColor} mb-2`}>
            최종 결제 준비 완료! 지금 시스템을 구축하세요.
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            현재 장바구니에 담긴 상품의 총합입니다. 이 가격으로 근본적인 변화를 경험할 수 있습니다.
          </p>

          {/* 최종 CTA 버튼 */}
          <button 
            onClick={() => { trackConversion('FINAL_PURCHASE', { total: calculateTotal() }); }}
            disabled={isLoading}
            className={`w-full py-4 text-xl font-bold rounded-lg transition duration-200 ${
              isLoading ? 'bg-gray-400 cursor-not-allowed' : `bg-${Solution.color} hover:bg-opacity-90`
            }`}
          >
            {isLoading ? '처리 중...' : `총 ${calculateTotal().toLocaleString()}원으로 구매하기`}
          </button>

          <p className="mt-4 text-sm text-center text-gray-500">
            * 결제 전, 장바구니에 담긴 상품 목록을 확인하세요. (현재 항목 수: {cartItems.length})
          </p>
        </div>
      </div>
    </section>
  );
};