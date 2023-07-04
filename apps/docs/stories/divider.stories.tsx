import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Divider, Card, Text } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/Divider",
  component: Divider,
} as Meta;

const Template: StoryFn = (args) => (
  <Card {...args}>
    <Text>Card content</Text>
    <Divider></Divider>
    <Text>Card content</Text>
  </Card>
);

export const Default = Template.bind({});
