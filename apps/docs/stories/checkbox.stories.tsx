import { Meta, StoryFn } from "@storybook/react";
import { Caption, Caption2, Card, Checkbox, Divider, HorizontalLayout, Text } from "@shiperist-catppuccin-ui/react";
import { useState } from "react";

export default {
  title: "Forms/Checkbox",
  component: Checkbox,
  argTypes: {
    disabled: { control: "boolean", description: "Whether the checkbox is disabled." },
    required: { control: "boolean", description: "Whether the checkbox is required." },
    variant: { control: { type: "select" }, description: "Determines the color variant of the checkbox." },
    size: { control: { type: "select" }, description: "Determines the size of the checkbox." },
    value: { control: "number", description: "Determines the value of the checkbox." },
    checked: { control: "boolean", description: "Determines if the checkbox is checked or not." },
    onChange: { control: "object", description: "Callback function triggered when the value of the checkbox changes." },
  },
} as Meta;

const Template: StoryFn = (args) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Card style={{ gap: 16 }}>
      <Text>Uncontrolled checkboxes:</Text>
      <HorizontalLayout style={{ gap: 16 }}>
        <Checkbox {...args}>
          <Caption className="ml-2">Checkbox</Caption>
        </Checkbox>
        <Checkbox {...args} checked>
          <Caption className="ml-2">Checkbox</Caption>
        </Checkbox>
      </HorizontalLayout>
      <Divider>OR</Divider>
      <Text>Controlled checkbox:</Text>
      <HorizontalLayout style={{ gap: 16 }}>
        <Checkbox {...args} checked={isChecked} onChange={() => setIsChecked(!isChecked)}>
          <Caption className="ml-2">Checkbox</Caption>
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
          <Caption className="ml-2">Checkbox</Caption>
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
          <Caption className="ml-2">Checkbox</Caption>
        </Checkbox>
      ))}
    </HorizontalLayout>
  );
};

export const DisabledState = () => {
  return (
    <Checkbox disabled>
      <Caption className="ml-2">Checkbox</Caption>
    </Checkbox>
  );
};
