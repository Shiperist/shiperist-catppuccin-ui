import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Text } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/Text",
  component: Text,
} as Meta;

const Template: StoryFn = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "This a preview text",
};
