import { Meta, StoryFn } from "@storybook/react";
import {
  Button,
  HorizontalLayout,
  Icon,
  VerticalLayout,
} from "@shiperist-catppuccin-ui/react";
import { HeartIcon } from "@shiperist-catppuccin-ui/utilities";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    isLoading: { control: "boolean" },
    disabled: { control: "boolean" },
    tooltip: { control: "text" },
    variant: { control: { type: "select" } },
    appearance: { control: { type: "select" } },
    size: { control: { type: "select" } },
    leadingElement: { control: "object" },
    trailingElement: { control: "object" },
    children: { control: "text" },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Button
    leadingElement={<Icon icon={<HeartIcon />} size={args.size} />}
    {...args}
  />
);

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
    { id: 1, name: "filled" },
    { id: 2, name: "ghost" },
    { id: 3, name: "tint" },
    { id: 4, name: "outline" },
    { id: 5, name: "shadow" },
  ];

  return (
    <HorizontalLayout style={{ gap: 8 }}>
      {appearances.map((appearance) => (
        <Button
          {...Default.args}
          key={appearance.id}
          leadingElement={icon}
          appearance={appearance.name}
        >
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
        <Button
          key={variant.id}
          appearance="outline"
          variant="base"
          size={variant.size}
          style={{ gap: 16 }}
        >
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
