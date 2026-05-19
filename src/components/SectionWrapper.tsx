import React from 'react';
import { spacing } from '../styles/theme';

interface SectionWrapperProps {
  id: string; // 고유 ID는 접근성 및 앵커링에 필수
  children: React.ReactNode;
}

/**
 * Funnel의 각 섹션을 감싸는 마스터 컴포넌트입니다.
 * 일관된 여백(Spacing)과 배경(Background)을 강제하여 전문성을 유지합니다.
 */
const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children }) => {
  return (
    <section 
      id={id} 
      className={`py-${spacing.xl} px-4 md:px-8 lg:px-16 ${/* 배경 색상 로직 추가 가능 */}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;