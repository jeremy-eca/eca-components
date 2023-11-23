import { Button } from './Button';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  component: Button,
  title: 'Components/Button',
  parameters: {
    componentSubtitle: 'A standard button component'
  },
  argTypes: {
    type: {
      control: 'select',
      description:
        'Defines the colour scheme of the button based on the current theme',
      options: ['primary', 'secondary']
    },
    onClick: {
      description: 'The function to be called when the button is clicked',
      action: 'clicked'
    }
  }
};

export const Default = {
  args: {
    type: 'primary'
  }
};

export const Primary = {
  args: {
    type: 'primary'
  }
};

export const Secondary = {
  args: {
    type: 'secondary'
  }
};

export const Clicked = {
  args: {
    type: 'primary'
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
};
