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
  title: "Components/Card",
  component: Card,
  argTypes: {
    appearance: { control: { type: "select" }, description: "Determines the appearance style of the card." },
    orientation: { control: { type: "select" }, description: "Determines the orientation of the card." },
    variant: {
      control: { type: "select" },
      description: "Determines the color variant of the card. Works only for embed option",
    },
    gap: { control: "text", description: "Determines the gap between elements in the card." },
    disabled: { control: "boolean", description: "Whether the card is disabled." },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Card {...args} gap={16}>
    <CardHeader>
      <Subtitle bold>Your plan</Subtitle>
      <Caption>This plan is for those who have a team...</Caption>
    </CardHeader>
    <CardContent>
      <Text>- File sharing</Text>
      <Text>- 50 GB storage</Text>
      <Text>- 16 GB of RAM</Text>
      <Text>- ...</Text>
    </CardContent>
    <CardFooter>
      <Button size="large" variant="success" disabled={args.disabled} className="w-full">
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
  gap: ".5rem",
};

export const Appearances = () => {
  const appearances = [
    { id: 1, appearance: "filled" },
    { id: 2, appearance: "outline" },
    { id: 3, appearance: "shadow" },
    { id: 4, appearance: "embed" },
  ];
  return (
    <VerticalLayout style={{ gap: 8, width: "32rem" }}>
      {appearances.map((key) => (
        <Card {...Default.args} key={key.id} appearance={key.appearance}>
          content
        </Card>
      ))}
    </VerticalLayout>
  );
};
export const Orientations = () => {
  const orientations: any[] = [
    { id: 1, orientation: "vertical" },
    { id: 2, orientation: "horizontal" },
  ];
  return (
    <VerticalLayout style={{ gap: 8, width: "32rem" }}>
      {orientations.map((key) => (
        <Card {...Default.args} key={key.id} orientation={key.orientation}>
          <Card appearance="filled" orientation={key.orientation} gap={8}>
            <Text>content</Text>
          </Card>
          <Card appearance="filled" gap={8}>
            <Text>content</Text>
          </Card>
        </Card>
      ))}
    </VerticalLayout>
  );
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  ...Default.args,
  disabled: true,
};
