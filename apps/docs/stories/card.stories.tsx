import { Meta, StoryFn } from "@storybook/react";
import {
  Button,
  Caption,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Subtitle,
  Text,
  VerticalLayout,
} from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/Card",
  component: Card,
  argTypes: {
    appearance: { control: { type: "select" } },
    orientation: { control: { type: "select" } },
    variant: { control: { type: "select" } },
    border: { control: { type: "select" } },
    padding: { control: "text" },
    gap: { control: "text" },
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Card {...args} gap={16} border="medium">
    <CardHeader className="flex flex-col">
      <Subtitle bold>Your plan</Subtitle>
      <Caption>This plan is for those who have a team...</Caption>
    </CardHeader>
    <CardContent className="flex flex-col">
      <Text>- File sharing</Text>
      <Text>- 50 GB storage</Text>
      <Text>- 16 GB of RAM</Text>
      <Text>- ...</Text>
    </CardContent>
    <CardFooter>
      <Button size="large" appearance="filled" variant="success" className="w-full">
        Choose plan
      </Button>
    </CardFooter>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  appearance: "outline",
  orientation: "vertical",
  variant: "base",
  disabled: false,
  padding: "2rem",
  border: "medium",
  gap: ".5rem",
};

export const Appearance = () => {
  return (
    <VerticalLayout style={{ gap: 8, width: "24rem" }}>
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
