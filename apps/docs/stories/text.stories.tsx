import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Text } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/Text",
  component: Text,
  argTypes: {
    font: {
      control: {
        type: "select",
        options: ["none", "bold", "italic"],
      },
    },
    prop: {
      control: {
        type: "select",
        options: ["p", "a", "description", "h1", "h2", "h3"],
      },
    },
    error: { control: "boolean" },
  },
  children: { control: "text" },
} as Meta;

const Template: StoryFn = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "This a preview text",
  font: "none",
  prop: "p",
  error: false,
};
