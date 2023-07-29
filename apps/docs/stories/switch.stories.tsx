import { Meta, StoryFn } from "@storybook/react";
import { HorizontalLayout, Switch, Text } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/Switch",
  component: Switch,
  argTypes: {
    disabled: { control: "boolean" },
    variant: { control: { type: "select" } },
    appearance: { control: { type: "select" } },
  },
} as Meta;

const Template: StoryFn = (args) => {
  return (
    <Switch {...args}>
      <Text className="text-sm ml-2">Switch</Text>
    </Switch>
  );
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  variant: "success",
  appearance: "alternative",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
