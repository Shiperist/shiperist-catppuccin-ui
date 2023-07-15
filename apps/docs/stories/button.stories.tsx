import { Meta, StoryFn } from "@storybook/react";
import { Button, HorizontalLayout } from "@shiperist-catppuccin-ui/react";

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
        options: ["success", "warning", "danger", "info"],
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

const leadingElement = (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-heart">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  </>
);
const trailingElement = (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-heart">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  </>
);

export const Default = Template.bind({});
Default.args = {
  loading: false,
  tooltip: "",
  variant: "success",
  size: "medium",
  disabled: false,
  children: "Click Me",
  appearance: "outline",
};

export const WithIcons = () => {
  return (
    <HorizontalLayout style={{ gap: 8 }}>
      <Button leadingElement={leadingElement}>Button</Button>
      <Button trailingElement={trailingElement}>Button</Button>
      <Button leadingElement={leadingElement} trailingElement={trailingElement}>
        Button
      </Button>
    </HorizontalLayout>
  );
};

export const Appearance = () => {
  return (
    <HorizontalLayout style={{ gap: 8 }}>
      <Button appearance="outline">Click me</Button>
      <Button appearance="filled">Click me</Button>
      <Button appearance="ghost">Click me</Button>
      <Button appearance="tint">Click me</Button>
      <Button appearance="shadow">Click me</Button>
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
