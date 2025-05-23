type TailwindFontSizeValue =
  | string
  | [string, string]
  | [string, Partial<{ lineHeight: string; letterSpacing: string; fontWeight: string | number }>];

type TailwindFontSizeTheme = Record<string, TailwindFontSizeValue>;

export const fontFamily = {
  sans: [
    'Roboto',
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
};

export const fontSize: TailwindFontSizeTheme = {
  xs: ['0.75rem', { lineHeight: '1.25rem' }],
  sm: ['0.875rem', { lineHeight: '1.375rem' }],
  base: ['1rem', { lineHeight: '1.5rem' }],
  lg: ['1.125rem', { lineHeight: '1.625rem' }],
  xl: ['1.25rem', { lineHeight: '1.75rem' }],
  '2xl': ['1.5rem', { lineHeight: '1.875rem' }],
  '3xl': ['1.875rem', { lineHeight: '2.125rem' }],
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  '5xl': ['3rem', { lineHeight: '3.25rem' }],
  '6xl': ['3.75rem', { lineHeight: '1' }],
  '7xl': ['4.5rem', { lineHeight: '1' }],
  '8xl': ['6rem', { lineHeight: '1' }],
};

export type ThemeFontFamily = typeof fontFamily;
export type ThemeFontSize = typeof fontSize;
