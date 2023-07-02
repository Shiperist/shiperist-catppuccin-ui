import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Card, Title, HorizontalLayout } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/HorizontalLayout",
  component: HorizontalLayout,
} as Meta;

const Template: StoryFn = (args) => (
  <Card {...args}>
    <HorizontalLayout className="gap-2">
      <Title>Card content</Title>
      <Title>Card content</Title>
    </HorizontalLayout>
  </Card>
);

export const Default = Template.bind({});
