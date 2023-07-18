import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonAppearance, HorizontalLayout } from "@shiperist-catppuccin-ui/react";
import { leadingElement, trailingElement } from "../utilities/icons";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    tooltip: { control: "text" },
    variant: {
      control: {
        type: "select",
        options: ["success", "warning", "danger", "info", "base"],
      },
    },
    appearance: {
      control: {
        type: "select",
        options: ["filled", "ghost", "tint", "outline", "shadow"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large", "xlarge"],
      },
    },
    leadingElement: { control: "object" },
    trailingElement: { control: "object" },
    children: { control: "text" },
  },
} as Meta;

const Template: StoryFn = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  loading: false,
  tooltip: "",
  variant: "base",
  size: "medium",
  disabled: false,
  children: "Click Me",
  appearance: "outline",
};

export const WithIcons = () => {
  return (
    <HorizontalLayout style={{ gap: 8 }}>
      <Button leadingElement={leadingElement}>Click me</Button>
      <Button trailingElement={trailingElement}>Click me</Button>
      <Button leadingElement={leadingElement} trailingElement={trailingElement}>
        Click me
      </Button>
    </HorizontalLayout>
  );
};

export const Appearance = () => {
  const appearances: ButtonAppearance[] = ["filled", "ghost", "tint", "outline", "shadow"];

  return (
    <HorizontalLayout style={{ gap: 8 }}>
      {appearances.map((key) => (
        <Button appearance={key}>Click me</Button>
      ))}
    </HorizontalLayout>
  );
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  ...Default.args,
  loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
