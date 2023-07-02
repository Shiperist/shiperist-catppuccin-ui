import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Italic } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/Italic",
  component: Italic,
} as Meta;

const Template: StoryFn = (args) => <Italic {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "This a preview text",
};
