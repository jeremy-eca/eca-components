import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Button } from './Button';

export default {
  component: Button,
  title: 'Components/Button',
  parameters: {
    componentSubtitle: 'A standard button component'
  },
  argTypes: {
    variant: {
      control: 'select',
      description:
        'Defines the colour scheme of the button based on the current theme',
      options: ['primary', 'info']
    },
    onClick: {
      action: true
    },
    onMouseOver: {
      action: true
    }
  }
};

export const Default = {
  args: {
    variant: 'primary',
    children: 'Button'
  }
};

export const Info = {
  args: {
    variant: 'info',
    children: 'Info'
  }
};

export const Error = {
  args: {
    variant: 'error',
    children: 'Error'
  }
};

export const Interactions = {
  args: {
    variant: 'primary',
    children: 'Interactions'
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Click', async () => {
      await userEvent.click(canvas.getByRole('button'));
      await waitFor(() => expect(args.onClick).toHaveBeenCalled());
    });

    await step('Hover', async () => {
      await userEvent.hover(canvas.getByRole('button'));
      await waitFor(() => expect(args.onMouseOver).toHaveBeenCalled());
    });
  }
};
