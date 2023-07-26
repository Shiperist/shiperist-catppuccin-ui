import { Meta, StoryFn } from "@storybook/react";
import { Divider, Card, Text, VerticalLayout } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/Divider",
  component: Divider,
  argTypes: {
    label: { control: "text" },
    thickness: { control: { type: "select" } },
    orientation: { control: { type: "select" } },
    labelPosition: { control: { type: "select" } },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Card appearance="outline" orientation="vertical" className="p-4" style={{ gap: 16, width: "24rem" }}>
    <Text>Card content</Text>
    <Divider {...args}></Divider>
    <Text>Card content</Text>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  label: "",
  orientation: "horizontal",
  labelPosition: "left",
  thickness: "tiny",
};

export const Orientations = () => {
  return (
    <VerticalLayout style={{ gap: 16, width: "24rem" }}>
      <Text bold>Vertical divider with label</Text>
      <Card
        appearance="outline"
        orientation="horizontal"
        className="items-center p-4"
        style={{ height: "120px", gap: 32 }}>
        <Text>Card content</Text>
        <Divider orientation="vertical" thickness="tiny" label="OR" labelPosition="center" />
        <Text>Card content</Text>
      </Card>
      <Text bold>Horizontal divider with label</Text>
      <Card appearance="outline" orientation="vertical" className="p-4" style={{ gap: 16 }}>
        <Text>Card content</Text>
        <Divider orientation="horizontal" thickness="tiny" label="OR" labelPosition="center" />
        <Text>Card content</Text>
      </Card>
    </VerticalLayout>
  );
};
