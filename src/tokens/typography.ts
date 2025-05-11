// src/tokens/typography.ts

export const fontFamily = {
  sans: [
    'Roboto', // MUI's default font
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    '"Noto Sans"',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"',
  ],
  // serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
  // mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
};

export const fontSize = {
  // MUI-like scale (values often in rem for accessibility)
  // Based on MUI default type ramp: h1 (96px) to caption (12px)
  'xs': ['0.75rem', { lineHeight: '1.25rem' }],    // 12px, like caption
  'sm': ['0.875rem', { lineHeight: '1.375rem' }],  // 14px, like body2
  'base': ['1rem', { lineHeight: '1.5rem' }],      // 16px, like body1
  'lg': ['1.125rem', { lineHeight: '1.625rem' }],  // 18px, like h6
  'xl': ['1.25rem', { lineHeight: '1.75rem' }],   // 20px, like h5
  '2xl': ['1.5rem', { lineHeight: '1.875rem' }],  // 24px, like h4
  '3xl': ['1.875rem', { lineHeight: '2.125rem' }],// 30px, like h3
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px, like h2
  '5xl': ['3rem', { lineHeight: '3.25rem' }],     // 48px
  '6xl': ['3.75rem', { lineHeight: '1' }],       // 60px, like h1 (MUI's h1 is 6rem/96px with tighter leading)
  '7xl': ['4.5rem', { lineHeight: '1' }],         // 72px
  '8xl': ['6rem', { lineHeight: '1' }],           // 96px
};

// Font weights can often use Tailwind's defaults (light, normal, medium, semibold, bold)
// MUI default weights: light (300), regular (400), medium (500), bold (700)
// export const fontWeight = { ... }

export type ThemeFontFamily = typeof fontFamily;
export type ThemeFontSize = typeof fontSize;
