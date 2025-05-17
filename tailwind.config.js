import { createThemes } from 'tw-colors';
import ecaDark from '@ecainternational/eca-design-tokens/tailwind/eca-dark-theme.tailwind';
import ecaLight from '@ecainternational/eca-design-tokens/tailwind/eca-light-theme.tailwind';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  plugins: [
    createThemes({
      'eca-light': ecaLight,
      'eca-dark': ecaDark
    })
  ]
};
