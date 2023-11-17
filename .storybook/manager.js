import { addons } from '@storybook/manager-api';
import ecaTheme from './eca-theme.js';

addons.setConfig({
  theme: ecaTheme
});
