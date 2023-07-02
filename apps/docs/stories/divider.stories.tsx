import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Divider, Card, Title } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/Divider",
  component: Divider,
} as Meta;

const Template: StoryFn = (args) => (
  <Card {...args}>
    <Title>Card content</Title>
    <Divider></Divider>
    <Title>Card content</Title>
  </Card>
);

export const Default = Template.bind({});
