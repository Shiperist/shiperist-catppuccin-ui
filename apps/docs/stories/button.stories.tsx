import { Meta, StoryFn } from "@storybook/react";
import { Button, HorizontalLayout, Icon } from "@shiperist-catppuccin-ui/react";
import { HeartIcon } from "@shiperist-catppuccin-ui/utilities";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    isLoading: { control: "boolean", description: "Whether the button is loading." },
    disabled: { control: "boolean", description: "Whether the button is disabled." },
    tooltip: {
      control: "text",
      description: "Sets the tooltip of the button that will be shown when button is hovered.",
    },
    variant: { control: { type: "select" }, description: "Determines the color variant of the button." },
    shape: { control: { type: "select" }, description: "Determines the shape of the button." },
    appearance: { control: { type: "select" }, description: "Determines the appearance style of the button." },
    size: { control: { type: "select" }, description: "Determines the size of the button." },
    leadingElement: { control: "object", description: "Sets an element/s on the left side of the button." },
    trailingElement: { control: "object", description: "Sets an element/s on the right side of the button." },
    children: {
      control: "text",
      description: "Determines the children of the button. In this scenario it's the text.",
    },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Button leadingElement={<Icon icon={<HeartIcon />} size={args.size} />} {...args}>
    Click me
  </Button>
);

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
  tooltip: "",
  variant: "base",
  size: "medium",
  disabled: false,
  children: "",
  appearance: "outline",
  shape: "rounded",
};

const icon = <Icon icon={<HeartIcon />} size={Default.args.size} />;
export const WithIcons = () => {
  return (
    <HorizontalLayout style={{ gap: 8 }}>
      <Button {...Default.args} leadingElement={icon}>
        Click me
      </Button>
      <Button {...Default.args} trailingElement={icon}>
        Click me
      </Button>
      <Button {...Default.args} leadingElement={icon} trailingElement={icon}>
        Click me
      </Button>
      <Button {...Default.args} leadingElement={icon}></Button>
    </HorizontalLayout>
  );
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
        <Button key={variant.id} appearance="outline" variant={variant.variant}>
          Click me
        </Button>
      ))}
    </HorizontalLayout>
  );
};

export const Appearances = () => {
  const appearances: any[] = [
    /* { id: 1, name: "filled" }, */
    { id: 2, name: "ghost" },
    { id: 3, name: "tint" },
    { id: 4, name: "outline" },
    { id: 5, name: "shadow" },
  ];

  return (
    <HorizontalLayout style={{ gap: 8 }}>
      {appearances.map((appearance) => (
        <Button {...Default.args} key={appearance.id} leadingElement={icon} appearance={appearance.name}>
          Click me
        </Button>
      ))}
    </HorizontalLayout>
  );
};

export const Sizes = () => {
  const variants: any[] = [
    { id: 1, size: "small" },
    { id: 2, size: "medium" },
    { id: 3, size: "large" },
    { id: 4, size: "xlarge" },
  ];
  return (
    <HorizontalLayout style={{ gap: 10 }}>
      {variants.map((variant) => (
        <Button key={variant.id} appearance="outline" variant="base" size={variant.size}>
          Click me
        </Button>
      ))}
    </HorizontalLayout>
  );
};

export const Shapes = () => {
  const variants: any[] = [
    { id: 1, shape: "square" },
    { id: 2, shape: "rounded" },
    { id: 3, shape: "circular" },
  ];
  return (
    <HorizontalLayout style={{ gap: 10 }}>
      {variants.map((variant) => (
        <Button key={variant.id} appearance="outline" variant="base" shape={variant.shape}>
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

export const DisabledState = Template.bind({});
DisabledState.args = {
  ...Default.args,
  disabled: true,
};
