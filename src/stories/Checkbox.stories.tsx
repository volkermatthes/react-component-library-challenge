import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "../components/inputs/Checkbox/Checkbox";
import { useArgs } from "@storybook/preview-api";
import React from "react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    isChecked: false,
    disabled: false,
    value: "checkbox",
    name: "group",
  },
  argTypes: {
    handleClick: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    isChecked: {
      control: "boolean",
    },
  },
  render: function Render(args) {
    const [{ isChecked, disabled }, updateArgs] = useArgs();

    const handleClick = () => {
      if (!disabled) updateArgs({ isChecked: !isChecked });
    };

    return (
      <Checkbox {...args} handleClick={handleClick} isChecked={isChecked} />
    );
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

export const Default: Story = {
  args: {
    label: "Checkbox",
  },
};

export const WithoutLabel: Story = {};
