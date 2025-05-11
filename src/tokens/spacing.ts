// src/tokens/spacing.ts

// Assuming 1rem = 16px, MUI base spacing unit = 8px
export const spacing = {
  '0': '0',       // 0px
  '1': '0.5rem',  // 8px
  '2': '1rem',    // 16px
  '3': '1.5rem',  // 24px
  '4': '2rem',    // 32px
  '5': '2.5rem',  // 40px
  '6': '3rem',    // 48px
  '7': '3.5rem',  // 56px
  '8': '4rem',    // 64px
  '9': '4.5rem',  // 72px
  '10': '5rem',   // 80px
  '11': '5.5rem',  // 88px
  '12': '6rem',   // 96px
  '14': '7rem',   // 112px
  '16': '8rem',   // 128px
  '20': '10rem',  // 160px
  '24': '12rem',  // 192px
  '28': '14rem',  // 224px
  '32': '16rem',  // 256px
};

export type ThemeSpacing = typeof spacing;