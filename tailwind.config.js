import ecaBrand from '@ecainternational/eca-design-tokens/tailwind/eca-brand.tailwind';
import ecaDark from '@ecainternational/eca-design-tokens/tailwind/eca-dark.tailwind';
import ecaLight from '@ecainternational/eca-design-tokens/tailwind/eca-light.tailwind';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    ...ecaBrand
  },
  daisyui: {
    themes: [
      {
        'eca-dark': ecaDark,
        'eca-light': ecaLight
      }
    ]
  },
  plugins: [require('daisyui')]
};
