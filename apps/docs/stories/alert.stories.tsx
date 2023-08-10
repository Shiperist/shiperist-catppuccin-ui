import { Meta, StoryFn } from "@storybook/react";
import { Alert, Text, Button, Icon, VerticalLayout } from "@shiperist-catppuccin-ui/react";
import {
  CheckCircleIcon,
  DangerIcon,
  ErrorCircleIcon,
  HeartIcon,
  WarningIcon,
} from "@shiperist-catppuccin-ui/utilities";

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    variant: {
      control: { type: "select" },
      description: "Determines the color variant of the alert.",
    },
    size: { control: { type: "select" }, description: "Determines the size of the alert." },
    appearance: { control: { type: "select" }, description: "Determines the appearance style of the alert." },
    leadingElement: { control: "object", description: "Sets an element/s on the left side of the alert." },
    trailingElement: { control: "object", description: "Sets an element/s on the right side of the alert." },
    children: { control: "text", description: "Determines the children of the alert. In this scenario it's the text." },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Alert
    leadingElement={<Icon icon={<HeartIcon />} size={args.size} />}
    {...args}
    style={{ gap: 12, width: "32rem" }}></Alert>
);

export const Default = Template.bind({});
Default.args = {
  variant: "base",
  size: "medium",
  appearance: "outline",
  children: "X unread messages.",
};

export const Variants = () => {
  const variants: any[] = [
    { id: 1, variant: "base", icon: <HeartIcon /> },
    { id: 2, variant: "success", icon: <CheckCircleIcon /> },
    { id: 3, variant: "warning", icon: <WarningIcon /> },
    { id: 4, variant: "info", icon: <ErrorCircleIcon /> },
    { id: 5, variant: "danger", icon: <DangerIcon /> },
  ];
  return (
    <VerticalLayout style={{ gap: 10 }}>
      {variants.map((variant) => (
        <Alert
          leadingElement={<Icon icon={variant.icon} size={Default.args?.size || "medium"} />}
          key={variant.id}
          appearance="outline"
          variant={variant.variant}
          size="medium"
          style={{ gap: 16, width: "32rem" }}>
          X unread messages.
        </Alert>
      ))}
    </VerticalLayout>
  );
};

export const Appearances = () => {
  const variants: any[] = [
    { id: 1, appearance: "filled" },
    { id: 2, appearance: "outline" },
    { id: 3, appearance: "tint" },
  ];
  return (
    <VerticalLayout style={{ gap: 10 }}>
      {variants.map((variant) => (
        <Alert
          key={variant.id}
          appearance={variant.appearance}
          variant="base"
          size="medium"
          style={{ gap: 16, width: "32rem" }}>
          X unread messages.
        </Alert>
      ))}
    </VerticalLayout>
  );
};

export const Sizes = () => {
  const variants: any[] = [
    { id: 1, size: "small" },
    { id: 2, size: "medium" },
    { id: 3, size: "large" },
  ];
  return (
    <VerticalLayout style={{ gap: 10 }}>
      {variants.map((variant) => (
        <Alert
          key={variant.id}
          appearance="outline"
          variant="base"
          size={variant.size}
          style={{ gap: 16, width: "32rem" }}>
          X unread messages.
        </Alert>
      ))}
    </VerticalLayout>
  );
};

export const AdvancedAlert = () => {
  return (
    <VerticalLayout style={{ gap: 10 }}>
      <Alert
        leadingElement={<Icon icon={<ErrorCircleIcon />} size={Default.args?.size || "medium"} />}
        variant="base"
        size="medium"
        appearance="outline"
        trailingElement={
          <Button size="small" variant="info" appearance="ghost">
            <Text bold className="text-info">
              View
            </Text>
          </Button>
        }
        style={{ gap: 16, width: "32rem" }}>
        X unread messages.
      </Alert>
    </VerticalLayout>
  );
};
