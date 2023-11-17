import { create } from '@storybook/theming/create';
import ecaLogo from './.public/eca-logo.svg';

export default create({
  base: 'light',
  brandTitle: 'ECA International',
  brandUrl: 'https://www.eca-international.com/',
  brandImage: ecaLogo,
  brandTarget: '_self'
});
