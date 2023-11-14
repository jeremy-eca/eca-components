const ecaBrand = require("./themes/eca-brand.tailwind");
const ecaDark = require("./themes/eca-dark.tailwind");
const ecaLight = require("./themes/eca-light.tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  safelist: [
    {pattern: /btn-./}, //TODO - add more to this safelist
  ],
  theme: {
    ...ecaBrand
  },
  daisyui: {
    themes: [{
      "eca-dark": ecaDark,
      "eca-light": ecaLight,
    }]
  },
  plugins: [require('daisyui')]
};

