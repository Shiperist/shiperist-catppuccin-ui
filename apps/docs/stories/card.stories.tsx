import { Meta, StoryFn } from "@storybook/react";
import { Card, Text } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/Card",
  component: Card,
  argTypes: {
    appearance: {
      control: {
        type: "select",
        options: ["filled", "shadow", "outline"],
      },
    },
    orientation: {
      control: {
        type: "select",
        options: ["horizontal", "vertical"],
      },
    },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Card {...args} style={{ gap: 4 }}>
    <Text>Card content</Text>
    <Text>Card content</Text>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  appearance: "outline",
  orientation: "vertical",
};

export const Filled = () => <Card appearance="filled">Card content</Card>;
export const Outline = () => <Card appearance="outline">Card content</Card>;
export const Shadow = () => <Card appearance="shadow">Card content</Card>;
