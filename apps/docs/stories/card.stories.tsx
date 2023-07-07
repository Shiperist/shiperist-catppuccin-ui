import { Meta, StoryFn } from "@storybook/react";
import { Card, Text } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/Card",
  component: Card,
} as Meta;

const Template: StoryFn = (args) => (
  <Card {...args}>
    <Text>Card content</Text>
  </Card>
);

export const Default = Template.bind({});
