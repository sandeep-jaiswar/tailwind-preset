// idx-tailwind-preset.ts
// You might want to install `@types/tailwindcss` for the `Config` type
// import type { Config } from 'tailwindcss';

// Using a more generic type or 'any' if 'Config' is not yet available
// const preset: any = { // Or Partial<Config> if you have the type
const preset = {
  theme: {
    extend: {
      colors: {
        // Example:
        // 'primary': '#007bff',
        // 'secondary': '#6c757d',
      },
      spacing: {
        // Example:
        // '128': '32rem',
      },
      fontFamily: {
        // Example:
        // sans: ['Inter', 'sans-serif'],
      },
      // ... other theme extensions
    },
  },
  plugins: [
    // You can add any custom Tailwind plugins here
    // For example, if you have a plugin for typography or forms:
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
  ],
  // You can also include other Tailwind configurations like:
  // darkMode: 'class', // or 'media'
  // variants: {
  //   extend: {},
  // },
};

module.exports = preset;