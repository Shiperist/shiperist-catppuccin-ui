import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Bold } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/Bold",
  component: Bold,
} as Meta;

const Template: StoryFn = (args) => <Bold {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "This a preview text",
};
