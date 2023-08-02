import { Meta, StoryFn } from "@storybook/react";
import {
  Caption2,
  HorizontalLayout,
  Switch,
  Text,
  VerticalLayout,
} from "@shiperist-catppuccin-ui/react";
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
          switchRef.current && setIsChecked(switchRef.current.checked);
        }}
      >
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

export const Appearances = () => {
  const variants: any[] = [
    { id: 1, appearance: "filled" },
    { id: 2, appearance: "alternative" },
  ];
  return (
    <HorizontalLayout style={{ gap: 10 }}>
      {variants.map((variant) => (
        <Switch key={variant.id} appearance={variant.appearance} size="medium">
          <Text className="ml-2 text-sm">Switch</Text>
        </Switch>
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
        <Switch key={variant.id} size={variant.size}>
          <Text className="ml-2 text-sm">Switch</Text>
        </Switch>
      ))}
    </HorizontalLayout>
  );
};

export const DisabledState = () => {
  return (
    <Switch disabled>
      <Text className="ml-2 text-sm">Switch</Text>
    </Switch>
  );
};
