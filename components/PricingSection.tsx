// components/PricingSection.tsx
import React, { useContext } from 'react';
import { MiniTemplateContext } from '@/context/MiniTemplateContext'; // Context API 사용 가정
import useConversionTracker from '@/hooks/useConversionTracker'; 
import PricingCard from './PricingCard';

/**
 * @description 랜딩 페이지의 핵심 가격 책정 및 구매 유도 섹션.
 * 이 컴포넌트는 비즈니스 로직(장바구니 상태)과 전환 추적을 담당하는 '시스템' 그 자체입니다.
 */
const PricingSection: React.FC = () => {
    const cartContext = useContext(MiniTemplateContext);
    const trackConversion = useConversionTracker();

    // 장바구니에 상품이 없으면 에러 메시지 대신 로직을 강제해야 합니다. (Guard)
    if (!cartContext || !cartContext.items.length) {
        return <div className="p-8 text-center bg-gray-50">🛒 아직 담아둔 상품이 없습니다. 위에 있는 기능을 사용해 주세요.</div>;
    }

    const handleAddToCart = (product: any, price: number) => {
        // 1. 비즈니스 로직 실행: 장바구니에 추가 및 상태 업데이트
        cartContext.addItem({ id: product.id, name: product.name, price: price });
        
        // 2. 전환 추적 로직 강제 실행 (핵심): 이 액션이 발생했음을 기록합니다.
        trackConversion('add_to_cart', { productId: product.id, amount: price });

        console.log(`[Tracking] 상품 ${product.name} 추가 시도 및 트래킹 완료.`);
    };

    return (
        <section className="py-20 bg-white" id="pricing">
            <div className="container mx-auto px-4 max-w-6xl text-center">
                <h2 className="text-4xl font-extrabold mb-3 text-gray-900">
                    최적의 시스템을 구축할 시간입니다.
                </h2>
                <p className="text-xl text-gray-600 mb-12">
                    당신의 비즈니스가 겪는 Pain Point에 대한 명확하고 측정 가능한 해결책을 제시합니다.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Pricing Card 1 */}
                    <PricingCard 
                        title="Basic Plan" 
                        description="시작 단계의 비즈니스에 적합한 핵심 기능만 제공합니다."
                        price={49}
                        features={[/* ... */]}
                        onAddToCart={() => handleAddToCart({id: 'basic', name: 'Basic System', price: 49}, 49)}
                    />

                    {/* Pricing Card 2 (Premium/Recommended) */}
                    <PricingCard 
                        title="Professional Plan" 
                        description="가장 많이 선택된 플랜. 성장을 위한 모든 시스템을 담았습니다."
                        price={199}
                        features={[/* ... */]}
                        isRecommended
                        onAddToCart={() => handleAddToCart({id: 'pro', name: 'Pro System', price: 199}, 199)}
                    />

                    {/* Pricing Card 3 */}
                    <PricingCard 
                        title="Enterprise Plan" 
                        description="대규모 조직을 위한 무제한 확장성과 전담 지원을 제공합니다."
                        price={799}
                        features={[/* ... */]}
                        onAddToCart={() => handleAddToCart({id: 'ent', name: 'Enterprise System', price: 799}, 799)}
                    />
                </div>
            </div>
        </section>
    );
};

export default PricingSection;