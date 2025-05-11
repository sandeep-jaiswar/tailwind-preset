// src/index.ts
import type { Config } from 'tailwindcss';

// Importing the defined tokens
import { colors } from './tokens/colors';
import { spacing } from './tokens/spacing';
import { borderRadius } from './tokens/borderRadius';
import { fontFamily, fontSize } from './tokens/typography';
import { screens } from './tokens/breakpoints';

const preset: Partial<Config> = {
  theme: {
    screens: screens, // Using imported breakpoints
    colors: colors,   // Using imported colors
    spacing: spacing, // Using imported spacing
    borderRadius: borderRadius, // Using imported borderRadius
    extend: {
      fontFamily: fontFamily, // Using imported fontFamily
      fontSize: fontSize,     // Using imported fontSize
      // You can still extend other parts of the theme here if needed
      // For example, specific fontWeight or lineHeight utilities if not covered by fontSize pairs
    },
  },
  plugins: [
    // Add any custom Tailwind plugins here
    // e.g., require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
  ],
};

module.exports = preset;