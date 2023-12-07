const { createThemes } = require('tw-colors');
const ecaBrand = require('@ecainternational/eca-design-tokens/tailwind/eca-brand.tailwind');
const ecaDark = require('@ecainternational/eca-design-tokens/tailwind/eca-dark-theme.tailwind');
const ecaLight = require('@ecainternational/eca-design-tokens/tailwind/eca-light-theme.tailwind');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    ...ecaBrand,
    extend: {
      transitionDuration: {
        DEFAULT: '500ms'
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out'
      }
    }
  },
  daisyui: {
    themes: []
  },
  plugins: [
    require('daisyui'),
    createThemes(
      {
        'eca-light': ecaLight,
        'eca-dark': ecaDark
      },
      {
        defaultTheme: {
          dark: 'eca-dark'
        }
      }
    )
  ]
};
