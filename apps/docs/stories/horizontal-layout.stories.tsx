import { Meta, StoryFn } from "@storybook/react";
import { Card, Text, HorizontalLayout } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/HorizontalLayout",
  component: HorizontalLayout,
} as Meta;

const Template: StoryFn = (args) => (
  <Card {...args}>
    <HorizontalLayout style={{ gap: 8 }}>
      <Text>Card content</Text>
      <Text>Card content</Text>
    </HorizontalLayout>
  </Card>
);

export const Default = Template.bind({});
