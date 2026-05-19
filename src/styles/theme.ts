/**
 * @fileOverview Funnel MVP의 디자인 토큰 및 테마 설정 (Design System Source of Truth)
 * [근거: Meta Funnel Thumbnail Design System Specification V1.0]
 */

// -------------------------
// 🎨 Color Palette Tokens
// -------------------------
export const colors = {
  baseDark: '#1A1A1A',         // Base/Authority (배경, 본문)
  painPointOrange: '#FF5722',  // Pain Point (위험/충격 강조)
  solutionGreen: '#4CAF50',    // Solution (해결책/성공)
  secondaryAccent: '#FFA000', // 보조 액센트 (강한 주의 유도)
  textLight: '#F5F5F5',        // 밝은 텍스트
};

// -------------------------
// 📏 Spacing & Sizing Tokens
// -------------------------
export const spacing = {
  xl: '3rem', // 48px
  lg: '2rem',  // 32px
  md: '1.5rem', // 24px
};

// -------------------------
// 🔡 Typography Tokens
// -------------------------
export const typography = {
  // 폰트 패밀리는 Next.js/Tailwind 기본 설정을 사용한다고 가정
  headingLarge: {
    fontSize: '3.5rem', // H1급, 최대 후킹 메시지
    fontWeight: '900',
    lineHeight: '1.1',
    color: colors.textLight,
  },
  subHeadingMedium: {
    fontSize: '2rem', // H2급, 섹션 제목
    fontWeight: '700',
    color: colors.secondaryAccent,
  },
  bodyTextRegular: {
    fontSize: '1rem', // 일반 본문 텍스트
    lineHeight: '1.6',
    color: '#A0A0A0', // 회색으로 전문적이고 차분하게
  }
};

export type ThemeColors = typeof colors;