import { Meta, StoryFn } from "@storybook/react";
import { Card, Text, VerticalLayout } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/Card",
  component: Card,
  argTypes: {
    appearance: {
      control: {
        type: "select",
        options: ["filled", "shadow", "outline", "embed"],
      },
    },
    orientation: {
      control: {
        type: "select",
        options: ["horizontal", "vertical"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["success", "warning", "danger", "info", "base"],
      },
    },
    border: { control: { type: "select", options: ["tiny", "small", "medium"] } },
    padding: { control: "text" },
    gap: { control: "text" },
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Card {...args}>
    <Text>Card content</Text>
    <Text>Card content</Text>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  appearance: "outline",
  orientation: "vertical",
  variant: "base",
  disabled: false,
  padding: "2rem",
  border: "tiny",
  gap: ".5rem",
};

export const Appearance = () => {
  return (
    <VerticalLayout style={{ gap: 8 }}>
      <Text bold>Filled</Text>
      <Card {...Default.args} appearance="filled">
        Card content
      </Card>
      <Text bold>Outline</Text>
      <Card {...Default.args} appearance="outline">
        Card content
      </Card>
      <Text bold>Shadow</Text>
      <Card {...Default.args} appearance="shadow">
        Card content
      </Card>
      <Text bold>Embed</Text>
      <Card {...Default.args} appearance="embed">
        Card content
      </Card>
    </VerticalLayout>
  );
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
