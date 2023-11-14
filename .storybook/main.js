/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.@(js|jsx)'],
  addons: [
    '@storybook/addon-links', //TODO - review these other plugins
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    "storybook-addon-data-theme-switcher",
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  }
};
export default config;
