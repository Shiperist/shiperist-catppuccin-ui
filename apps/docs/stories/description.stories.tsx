import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Description } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/Description",
  component: Description,
} as Meta;

const Template: StoryFn = (args) => <Description {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "This a preview text",
};
