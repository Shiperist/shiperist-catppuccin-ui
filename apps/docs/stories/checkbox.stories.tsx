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
  value: "",
};

export const Variants = () => {
  const variants: any[] = [
    { id: 1, variant: "base" },
    { id: 2, variant: "success" },
    { id: 3, variant: "warning" },
    { id: 4, variant: "info" },
    { id: 5, variant: "danger" },
  ];
  return (
    <HorizontalLayout style={{ gap: 10 }}>
      {variants.map((variant) => (
        <Checkbox key={variant.id} variant={variant.variant} checked>
          <Text className="text-sm ml-2">Checkbox</Text>
        </Checkbox>
      ))}
    </HorizontalLayout>
  );
};

export const Sizes = () => {
  const variants: any[] = [
    { id: 1, size: "small" },
    { id: 2, size: "medium" },
    { id: 3, size: "large" },
  ];
  return (
    <HorizontalLayout style={{ gap: 10 }}>
      {variants.map((variant) => (
        <Checkbox key={variant.id} size={variant.size} checked>
          <Text className="text-sm ml-2">Checkbox</Text>
        </Checkbox>
      ))}
    </HorizontalLayout>
  );
};

export const Disabled = () => {
  return (
    <Checkbox disabled>
      <Text className="text-sm ml-2">Checkbox</Text>
    </Checkbox>
  );
};
