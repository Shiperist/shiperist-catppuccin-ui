import { Meta, StoryFn } from "@storybook/react";
import { Button, HorizontalLayout, Kbd } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Components/Kbd",
  component: Kbd,
  argTypes: {
    appearance: { control: { type: "select" }, description: "Determines the appearance style of the kbd." },
    size: { control: { type: "select" }, description: "Determines the size of the kbd." },
    children: { control: "text", description: "Determines the text of the kbd" },
  },
} as Meta;

const Template: StoryFn = (args) => <Kbd {...args}></Kbd>;
export const Default = Template.bind({});
Default.args = {
  children: "Shift",
  size: "medium",
  appearance: "filled",
};

export const Sizes = () => {
  return (
    <HorizontalLayout>
      <Kbd size="small">Shift</Kbd>
      <Kbd size="medium">Shift</Kbd>
      <Kbd size="large">Shift</Kbd>
    </HorizontalLayout>
  );
};

export const Appearances = () => {
  return (
    <HorizontalLayout>
      <Kbd appearance="filled">Shift</Kbd>
      <Kbd appearance="ghost">Shift</Kbd>
      <Kbd appearance="outline">Shift</Kbd>
    </HorizontalLayout>
  );
};

export const KeyCombinations = () => {
  return (
    <HorizontalLayout>
      <Kbd size="small">CTRL</Kbd>+<Kbd size="small">C</Kbd>/<Kbd size="small">CTRL</Kbd>+<Kbd size="small">V</Kbd>
    </HorizontalLayout>
  );
};
export const InText = () => {
  return (
    <HorizontalLayout>
      Press <Kbd size="small">M</Kbd>to open a map
    </HorizontalLayout>
  );
};
