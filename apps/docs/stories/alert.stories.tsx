import { Meta, StoryFn } from "@storybook/react";
import { Alert, Button, Icon, VerticalLayout } from "@shiperist-catppuccin-ui/react";
import {
  CheckCircleIcon,
  DangerIcon,
  ErrorCircleIcon,
  HeartIcon,
  WarningIcon,
  XIcon,
} from "@shiperist-catppuccin-ui/utilities";

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    variant: { control: { type: "select" } },
    size: { control: { type: "select" } },
    appearance: { control: { type: "select" } },
    leadingElement: { control: "object" },
    trailingElement: { control: "object" },
    children: { control: "text" },
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
  children: "X unread messages. Tap to see.",
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
          X unread messages. Tap to see.
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
          X unread messages. Tap to see.
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
          X unread messages. Tap to see.
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
        variant="info"
        size="medium"
        appearance="outline"
        trailingElement={
          <div className="flex flex-row" style={{ gap: 4 }}>
            <Button size="small" variant="success" appearance="outline">
              View
            </Button>
            <Button
              size="small"
              variant="danger"
              appearance="ghost"
              leadingElement={<Icon icon={<XIcon />} size={Default.args?.size || "medium"} />}></Button>
          </div>
        }
        style={{ gap: 16, width: "32rem" }}>
        X unread messages. Tap to see.
      </Alert>
    </VerticalLayout>
  );
};
