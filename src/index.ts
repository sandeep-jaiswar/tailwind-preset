import type { Config } from 'tailwindcss';

const preset: Config = {
  content: [],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#e50914',
          dark: '#b20710',
          light: '#ff3f4b',
        },
        background: {
          DEFAULT: '#141414',
          light: '#1f1f1f',
          content: '#181818',
        },
        text: {
          DEFAULT: '#ffffff',
          muted: '#b3b3b3',
          subtle: '#999999',
        },
        border: {
          DEFAULT: '#333333',
          strong: '#444444',
        },
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['"Bebas Neue"', 'cursive'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
      borderRadius: {
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0, 0, 0, 0.7)',
        focus: '0 0 0 3px rgba(229, 9, 20, 0.5)',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
      },
    },
  },
  plugins: [],
};

export default preset;
