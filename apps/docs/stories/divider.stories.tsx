import { Meta, StoryFn } from "@storybook/react";
import { Divider, Card, Text, VerticalLayout, Badge } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Components/Divider",
  component: Divider,
  argTypes: {
    children: { control: "text" },
    thickness: { control: { type: "select" } },
    orientation: { control: { type: "select" } },
    labelPosition: { control: { type: "select" } },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Card appearance="outline" orientation="vertical" style={{ gap: 16, width: "32rem" }}>
    <Card appearance="filled" className="w-full items-center justify-center">
      <Text>content</Text>
    </Card>
    <Divider {...args}></Divider>
    <Card appearance="filled" className="w-full items-center justify-center">
      <Text>content</Text>
    </Card>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  children: "",
  orientation: "horizontal",
  labelPosition: "left",
  thickness: "tiny",
};

export const Orientations = () => {
  return (
    <VerticalLayout style={{ gap: 16, width: "32rem" }}>
      <Text bold>Vertical divider with text</Text>
      <Card orientation="horizontal" className="items-center" gap={32}>
        <Card appearance="filled" className="w-full items-center justify-center">
          <Text>content</Text>
        </Card>
        <Divider orientation="vertical" thickness="tiny" labelPosition="center" style={{ height: "6rem" }}>
          <Text>OR</Text>
        </Divider>
        <Card appearance="filled" className="w-full items-center justify-center">
          <Text>content</Text>
        </Card>
      </Card>
      <Text bold>Horizontal divider with text</Text>
      <Card gap={16}>
        <Card appearance="filled" className="w-full items-center justify-center">
          <Text>content</Text>
        </Card>
        <Divider orientation="horizontal" thickness="tiny" labelPosition="center">
          <Text>OR</Text>
        </Divider>
        <Card appearance="filled" className="w-full items-center justify-center">
          <Text>content</Text>
        </Card>
      </Card>
    </VerticalLayout>
  );
};

export const CustomLabel = () => {
  return (
    <Card style={{ width: "32rem", gap: 20 }}>
      <Card appearance="filled" className="w-full items-center justify-center">
        <Text>content</Text>
      </Card>
      <Divider orientation="horizontal" thickness="tiny" labelPosition="center">
        <Badge>Badge</Badge>
      </Divider>
      <Card appearance="filled" className="w-full items-center justify-center">
        <Text>content</Text>
      </Card>
    </Card>
  );
};
