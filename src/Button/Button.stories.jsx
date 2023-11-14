import Button from './Button';

export default {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      description: 'Defines the colour scheme of the button based on the current theme',
      options: ['primary', 'secondary'],
    },
  }
};

export const Primary = {
  args: {
    type: 'primary',
  },
};

export const Secondary = {
  args: {
    type: 'secondary',
  },
};
