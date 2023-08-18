import { Meta, StoryFn } from "@storybook/react";
import { Badge, BadgeProps, HorizontalLayout, Icon } from "@shiperist-catppuccin-ui/react";
import { HeartIcon } from "@shiperist-catppuccin-ui/utilities";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: { control: { type: "select" }, description: "Determines the color variant of the badge." },
    appearance: { control: { type: "select" }, description: "Determines the appearance style of the badge." },
    leadingElement: { control: "object", description: "Sets an element/s on the left side of the badge." },
    trailingElement: { control: "object", description: "Sets an element/s on the right side of the badge." },
    children: { control: "text", description: "Determines the children of the badge. In this scenario it's the text." },
  },
} as Meta;

const icon = <Icon icon={<HeartIcon />} size="tiny" />;
const Template: StoryFn = (args) => <Badge leadingElement={icon} {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "base",
  appearance: "filled",
  children: "Badge",
};

export const WithIcons = () => {
  return (
    <HorizontalLayout style={{ gap: 8 }}>
      <Badge {...Default.args} leadingElement={icon}>
        Badge
      </Badge>
      <Badge {...Default.args} trailingElement={icon}>
        Badge
      </Badge>
      <Badge {...Default.args} leadingElement={icon} trailingElement={icon}>
        Badge
      </Badge>
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
    <HorizontalLayout style={{ gap: 8 }}>
      {variants.map((variant) => (
        <Badge key={variant.id} appearance="outline" variant={variant.variant}>
          Badge
        </Badge>
      ))}
    </HorizontalLayout>
  );
};

export const Appearances = () => {
  const appearances: any[] = [
    { id: 1, appearance: "filled" },
    { id: 2, appearance: "outline" },
    { id: 3, appearance: "ghost" },
    /* { id: 4, appearance: "tint" }, */
  ];
  return (
    <HorizontalLayout style={{ gap: 8 }}>
      {appearances.map((appearance) => (
        <Badge {...Default.args} key={appearance.id} leadingElement={icon} appearance={appearance.appearance}>
          Badge
        </Badge>
      ))}
    </HorizontalLayout>
  );
};
