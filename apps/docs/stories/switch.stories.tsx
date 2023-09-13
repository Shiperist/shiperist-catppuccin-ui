import { Meta, StoryFn } from "@storybook/react";
import { Caption, Caption2, HorizontalLayout, Switch, VerticalLayout } from "@shiperist-catppuccin-ui/react";
import { useRef, useState } from "react";

export default {
  title: "Forms/Switch",
  component: Switch,
  argTypes: {
    disabled: { control: "boolean", description: "Whether the switch is disabled." },
    variant: { control: { type: "select" }, description: "Determines the color variant of the switch." },
    appearance: { control: { type: "select" }, description: "Determines the appearance style of the switch." },
    size: { control: { type: "select" }, description: "Determines the size of the switch." },
    checked: { control: "boolean", description: "Whether is the switch checked or not." },
    value: { control: "text", description: "Determines the value of the switch." },
    onChange: { control: "object", description: "Callback function triggered when the value of the switch changes." },
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
        }}>
        <Caption className="ml-2">Switch</Caption>
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
          <Caption className="ml-2">Switch</Caption>
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
          <Caption className="ml-2">Switch</Caption>
        </Switch>
      ))}
    </HorizontalLayout>
  );
};

export const DisabledState = () => {
  return (
    <Switch disabled>
      <Caption className="ml-2">Switch</Caption>
    </Switch>
  );
};
