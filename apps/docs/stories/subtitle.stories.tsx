import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Subtitle } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/Subtitle",
  component: Subtitle,
} as Meta;

const Template: StoryFn = (args) => <Subtitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "This a preview text",
};
