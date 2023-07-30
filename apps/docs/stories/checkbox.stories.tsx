import { Meta, StoryFn } from "@storybook/react";
import { Caption2, Card, Checkbox, Divider, HorizontalLayout, Text } from "@shiperist-catppuccin-ui/react";
import { useState } from "react";

export default {
  title: "Forms/Checkbox",
  component: Checkbox,
  argTypes: {
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    variant: { control: { type: "select" } },
    size: { control: { type: "select" } },
  },
} as Meta;

const Template: StoryFn = (args) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Card style={{ gap: 16 }}>
      <Text>Uncontrolled checkboxes:</Text>
      <HorizontalLayout style={{ gap: 16 }}>
        <Checkbox {...args}>
          <Text className="text-sm ml-2">Checkbox</Text>
        </Checkbox>
        <Checkbox {...args} checked>
          <Text className="text-sm ml-2">Checkbox</Text>
        </Checkbox>
      </HorizontalLayout>
      <Divider>OR</Divider>
      <Text>Controlled checkbox:</Text>
      <HorizontalLayout style={{ gap: 16 }}>
        <Checkbox {...args} checked={isChecked} onChange={() => setIsChecked(!isChecked)}>
          <Text className="text-sm ml-2">Checkbox</Text>
        </Checkbox>
      </HorizontalLayout>
      <Caption2>Checkbox is: {isChecked.toString()}</Caption2>
    </Card>
  );
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  variant: "success",
  required: false,
  checked: false,
  size: "medium",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
