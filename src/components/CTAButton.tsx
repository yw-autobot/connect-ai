import React from 'react';
import { colors, spacing } from '../styles/theme';

interface CTAButtonProps {
  children: React.ReactNode;
  primary?: boolean; // Primary action vs Secondary reminder
}

/**
 * Funnel 전반에 걸쳐 일관된 브랜드 색상과 크기를 가진 표준 CTA 버튼 컴포넌트입니다.
 * [근거: Meta Funnel Thumbnail Design System Specification V1.0]
 */
const CTAButton: React.FC<CTAButtonProps> = ({ children, primary = true }) => {
  // Primary Button (가장 강력한 Call to Action) - Solution/Solution Green 사용
  const baseStyles = "inline-flex items-center justify-center px-10 py-4 text-xl font-bold rounded-lg transition duration-300 shadow-2xl transform hover:scale-[1.02] focus:outline-none focus:ring-4";

  // Primary State (Solution/Green)
  const primaryStyles = `bg-[${colors.solutionGreen}] text-white ${baseStyles} hover:bg-[#5cb86c] focus:ring-[${colors.solutionGreen}]`;

  // Secondary State (Reminder/Accent) - 만약 추가적인 보조 액션이 필요할 때
  const secondaryStyles = `bg-transparent border-2 border-[#FFD700] text-[#FFD700] ${baseStyles} hover:bg-opacity-10`;

  return (
    <button 
      className={primary ? primaryStyles : secondaryStyles}
      aria-label="다음 단계로 이동하거나 상품을 구매하세요" // 접근성 필수 추가
    >
      {children}
    </button>
  );
};

export default CTAButton;