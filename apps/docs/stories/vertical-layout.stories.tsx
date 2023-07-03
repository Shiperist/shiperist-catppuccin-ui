import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Card, Title, VerticalLayout } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/VerticalLayout",
  component: VerticalLayout,
} as Meta;

const Template: StoryFn = (args) => (
  <Card {...args}>
    <VerticalLayout className="gap-2">
      <Title>Card content</Title>
      <Title>Card content</Title>
    </VerticalLayout>
  </Card>
);

export const Default = Template.bind({});
