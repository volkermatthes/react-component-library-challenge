import type { Meta, StoryObj } from '@storybook/react';
import  Button  from './GastromaticButton';

const meta: Meta<typeof Button> = {
    title: 'Example/GastromaticButton',
    component: Button,
    parameters: {
        layout: 'centered',
      },
    args: {
        size: 'default',
        disabled: false,
        text: 'Button',
    },
    argTypes: {
        size: {
            control: 'radio',
            options: ['default', 'small']
        },
        type: {
            control: 'radio',
            options: ['default', 'primary', 'danger'],
        }
    },
    tags: ['autodocs'],
  };
      
  export default meta;

  type Story = StoryObj<typeof meta>;

  export const Default: Story = {
    args: {
        type: 'default',
      }
};
  
export const Primary: Story = {
    args: {
        type: 'primary',
      }
};

export const Danger: Story = {
    args: {
        type: 'danger',
      }
};