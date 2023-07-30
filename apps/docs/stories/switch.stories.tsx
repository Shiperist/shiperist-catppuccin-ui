import { Meta, StoryFn } from "@storybook/react";
import { Caption2, Switch, Text, VerticalLayout } from "@shiperist-catppuccin-ui/react";
import { useRef, useState } from "react";

export default {
  title: "Forms/Switch",
  component: Switch,
  argTypes: {
    disabled: { control: "boolean" },
    variant: { control: { type: "select" } },
    appearance: { control: { type: "select" } },
    size: { control: { type: "select" } },
  },
} as Meta;

const Template: StoryFn = (args) => {
  const [isChecked, setIsChecked] = useState(false);
  const switchRef = useRef<HTMLInputElement | null>(null);

  return (
    <VerticalLayout style={{ gap: 8 }}>
      <Switch
        ref={switchRef}
        {...args}
        onClick={() => {
          if (switchRef.current) {
            setIsChecked(switchRef.current.checked);
          }
        }}>
        <Text className="ml-2">Switch</Text>
      </Switch>
      <Caption2>Switch is: {isChecked.toString()}</Caption2>
    </VerticalLayout>
  );
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  variant: "success",
  appearance: "alternative",
  size: "medium",
  checked: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
