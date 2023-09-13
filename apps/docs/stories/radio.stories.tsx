import { Meta, StoryFn } from "@storybook/react";
import { Radio, Text, RadioGroup, Caption2, Caption } from "@shiperist-catppuccin-ui/react";
import { useState } from "react";

export default {
  title: "Forms/Radio",
  component: Radio,
  argTypes: {
    disabled: { control: "boolean", description: "Whether the radio is disabled." },
    required: { control: "boolean", description: "Whether the radio is required." },
    variant: { control: { type: "select" }, description: "Determines the color variant of the radio." },
    size: { control: { type: "select" }, description: "Determines the size of the radio." },
    value: { control: "number", description: "Determines the value of the radio." },
    checked: { control: "boolean", description: "Determines if the radio is checked or not." },
    onChange: { control: "object", description: "Callback function triggered when the value of the radio changes." },
    name: {
      control: "name",
      description: "Determines the name of the radio, it's recommended to use the RadioGroup component directly.",
    },
  },
} as Meta;

const Template: StoryFn = (args) => {
  type RadioOption = {
    value: string;
    label: string;
  };

  const radioOptions: RadioOption[] = [
    { value: "radio1", label: "Radio 1" },
    { value: "radio2", label: "Radio 2" },
  ];

  const [selectedValue, setSelectedValue] = useState<string>("");

  return (
    <>
      <RadioGroup name="radios" className="w-32" style={{ gap: 8 }} disabled={args.disabled}>
        {radioOptions.map((option) => (
          <Radio
            {...args}
            key={option.value}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => setSelectedValue(option.value)}>
            <Caption className="ml-2">{option.label}</Caption>
          </Radio>
        ))}
      </RadioGroup>
      <Caption2 className="mt-2">Selected value: {selectedValue ? selectedValue : "none"}</Caption2>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  variant: "success",
  required: false,
  checked: false,
  size: "medium",
  name: "",
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
    <RadioGroup orientation="vertical" style={{ gap: 10 }}>
      {variants.map((variant) => (
        <Radio key={variant.id} size="medium" variant={variant.variant} checked>
          <Caption className="ml-2">Radio</Caption>
        </Radio>
      ))}
    </RadioGroup>
  );
};

export const Sizes = () => {
  const variants: any[] = [
    { id: 1, size: "small" },
    { id: 2, size: "medium" },
    { id: 3, size: "large" },
  ];
  return (
    <RadioGroup orientation="vertical" name="sizes" style={{ gap: 10 }}>
      {variants.map((variant) => (
        <Radio key={variant.id} size={variant.size}>
          <Caption className="ml-2">Radio</Caption>
        </Radio>
      ))}
    </RadioGroup>
  );
};

export const DisabledState = () => {
  return (
    <Radio disabled>
      <Caption className="ml-2">Radio</Caption>
    </Radio>
  );
};
