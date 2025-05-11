import type { Config } from 'tailwindcss';

import { colors } from './tokens/colors';
import { spacing } from './tokens/spacing';
import { borderRadius } from './tokens/borderRadius';
import { fontFamily, fontSize } from './tokens/typography';
import { screens } from './tokens/breakpoints';

const preset: Partial<Config> = {
  theme: {
    screens: screens,
    colors: colors,
    spacing: spacing,
    borderRadius: borderRadius,
    extend: {
      fontFamily: fontFamily,
      fontSize: fontSize,
    },
  },
  plugins: [],
};

export default preset;
