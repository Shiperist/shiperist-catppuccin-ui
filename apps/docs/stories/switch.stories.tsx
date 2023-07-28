import { Meta, StoryFn } from "@storybook/react";
import { HorizontalLayout, Switch, Text } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/Switch",
  component: Switch,
  agrTypes: {
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn = (args) => {
  return (
    <HorizontalLayout style={{ gap: 8 }}>
      <Switch {...args} />
      <Text className="text-sm">Switch</Text>
    </HorizontalLayout>
  );
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  children: "",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
