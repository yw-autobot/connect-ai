import React from 'react';

// 🚨 컴포넌트의 심각도와 목적을 Props로 정의하여 재사용성을 높입니다.
interface GateProps {
  /** 경고 메시지의 주요 내용 (가장 중요) */
  message: string;
  /** 배경색과 전반적인 분위기를 결정합니다. (Pain Orange-Red 등) */
  severityColor: 'warning' | 'critical' | 'informational';
  /** 이 게이트의 역할 (Hero, PainPoint, PreCTA 중 선택 가능) */
  context: 'hero' | 'pain' | 'precta';
}

// CSS Modules를 사용한다고 가정하고 스타일링합니다. 실제 프로젝트에 맞게 조정 필요.
const ContrarianGate: React.FC<GateProps> = ({ message, severityColor, context }) => {
  let bgColorClass = '';
  let icon = '⚠️';
  let titleText = '경고';

  // Context와 Severity에 따라 스타일 및 톤을 다르게 설정합니다.
  switch (severityColor) {
    case 'critical':
      bgColorClass = 'bg-red-700 border-red-900/50 shadow-red-800/50';
      icon = '🚨';
      titleText = '경고: 치명적인 오류 발견';
      break;
    case 'warning':
      bgColorClass = 'bg-yellow-600 border-yellow-900/50 shadow-yellow-700/50';
      icon = '⚠️';
      titleText = '주의: 놓치고 있는 핵심 진실';
      break;
    case 'informational':
      bgColorClass = 'bg-blue-600 border-blue-900/50 shadow-blue-700/50';
      icon = 'ℹ️';
      titleText = '진단: 현재 구조적 문제점 파악';
      break;
  }

  // 역할별로 추가적인 스타일링을 적용하여 시각적 위계를 부여합니다.
  const getContextStyle = () => {
    if (context === 'hero') return "border-b-4 border-yellow-500/80 scale-[1.02]"; // 가장 강렬하게 시작
    if (context === 'pain') return "border-l-8 border-red-600 transform translate-y-[-2px]"; // 문제 제기 시 구조적 강조
    return "";
  };

  return (
    <div className={`p-6 md:p-10 my-12 max-w-4xl mx-auto rounded-lg border-t-8 ${bgColorClass} text-white transition-all duration-500 shadow-2xl ${getContextStyle()}`}>
      <div className="flex items-center mb-3">
        <span className="text-3xl mr-3">{icon}</span>
        <h2 className={`text-2xl font-extrabold tracking-widest`}>
          {titleText} ({context.toUpperCase()})
        </h2>
      </div>
      <p className="text-lg mt-4 italic opacity-95">
        "{message}"
      </p>
      <div className="mt-6 text-right">
         <span className="text-sm uppercase tracking-widest font-semibold bg-black/20 px-3 py-1 rounded">
             지금, 이 진실을 무시하고 진행하시겠습니까? ❌
         </span>
      </div>
    </div>
  );
};

export default ContrarianGate;