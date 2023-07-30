import { Meta, StoryFn } from "@storybook/react";
import { Radio, Text, RadioGroup } from "@shiperist-catppuccin-ui/react";
import { useState, ChangeEvent } from "react";

export default {
  title: "Forms/Radio",
  component: Radio,
  argTypes: {
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    variant: { control: { type: "select" } },
    size: { control: { type: "select" } },
  },
} as Meta;

const Template: StoryFn = (args) => {
  return (
    <RadioGroup name="radios" style={{ gap: 8 }} disabled={args.disabled}>
      <Radio {...args}>
        <Text className="text-sm ml-2">Radio 1</Text>
      </Radio>
      <Radio {...args}>
        <Text className="text-sm ml-2">Radio 2</Text>
      </Radio>
    </RadioGroup>
  );
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  variant: "success",
  required: false,
  checked: false,
  size: "medium",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
