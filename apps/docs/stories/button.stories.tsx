import { Meta, StoryFn } from "@storybook/react";
import { Button, HorizontalLayout } from "@shiperist-catppuccin-ui/react";
import { HeartIcon } from "../utilities/icons";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    isLoading: { control: "boolean" },
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
  isLoading: false,
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
      <Button {...Default.args} leadingElement={HeartIcon}>
        Click me
      </Button>
      <Button {...Default.args} trailingElement={HeartIcon}>
        Click me
      </Button>
      <Button {...Default.args} leadingElement={HeartIcon} trailingElement={HeartIcon}>
        Click me
      </Button>
    </HorizontalLayout>
  );
};

export const Appearance = () => {
  const appearances: any[] = [
    { id: 1, name: "filled" },
    { id: 2, name: "ghost" },
    { id: 3, name: "tint" },
    { id: 4, name: "outline" },
    { id: 5, name: "shadow" },
  ];

  return (
    <HorizontalLayout style={{ gap: 8 }}>
      {appearances.map((appearance) => (
        <Button {...Default.args} key={appearance.id} appearance={appearance.name}>
          Click me
        </Button>
      ))}
    </HorizontalLayout>
  );
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  ...Default.args,
  isLoading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
