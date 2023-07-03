import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Link } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/Link",
  component: Link,
} as Meta;

const Template: StoryFn = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "This a preview text",
};
