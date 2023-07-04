import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Card, Text, VerticalLayout } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/VerticalLayout",
  component: VerticalLayout,
} as Meta;

const Template: StoryFn = (args) => (
  <Card {...args}>
    <VerticalLayout className="gap-2">
      <Text>Card content</Text>
      <Text>Card content</Text>
    </VerticalLayout>
  </Card>
);

export const Default = Template.bind({});
