import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Switch } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/Switch",
  component: Switch,
  agrTypes: {
    disabled: { control: "boolean" },
    variant: {
      control: {
        type: "select",
        options: ["rounded", "square"],
      },
    },
  },
} as Meta;

const Template: StoryFn = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  variant: "rounded",
};
