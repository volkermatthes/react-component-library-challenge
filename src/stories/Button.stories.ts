import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "../components/inputs/Button/Button";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Button",
  component: Button,

  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Button",
    size: "default",
    handleClick: fn(() => console.log("Button clicked")),
  },
  argTypes: {
    handleClick: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["default", "primary", "danger"],
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
  },
};
