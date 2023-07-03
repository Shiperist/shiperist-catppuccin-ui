import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Title } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/Title",
  component: Title,
} as Meta;

const Template: StoryFn = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "This a preview text",
};
