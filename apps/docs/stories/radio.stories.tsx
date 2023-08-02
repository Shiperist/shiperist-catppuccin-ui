import { Meta, StoryFn } from "@storybook/react";
import { Radio, Text, RadioGroup, Caption2, HorizontalLayout } from "@shiperist-catppuccin-ui/react";
import { useState } from "react";

export default {
  title: "Forms/Radio",
  component: Radio,
  argTypes: {
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    variant: { control: { type: "select" } },
    size: { control: { type: "select" } },
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
            <Text className="text-sm ml-2">{option.label}</Text>
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

export const Sizes = () => {
  const variants: any[] = [
    { id: 1, size: "small" },
    { id: 2, size: "medium" },
    { id: 3, size: "large" },
  ];
  return (
    <HorizontalLayout style={{ gap: 10 }}>
      {variants.map((variant) => (
        <Radio key={variant.id} size={variant.size}>
          <Text className="text-sm ml-2">Radio</Text>
        </Radio>
      ))}
    </HorizontalLayout>
  );
};

export const DisabledState = () => {
  return (
    <Radio disabled>
      <Text className="text-sm ml-2">Radio</Text>
    </Radio>
  );
};
