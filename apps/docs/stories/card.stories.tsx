import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Card, Title } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/Card",
  component: Card,
} as Meta;

const Template: StoryFn = (args) => (
  <Card {...args}>
    <Title>Card content</Title>
  </Card>
);

export const Default = Template.bind({});
