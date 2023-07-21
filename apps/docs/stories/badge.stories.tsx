import { Meta, StoryFn } from "@storybook/react";
import { Badge, HorizontalLayout } from "@shiperist-catppuccin-ui/react";
import { HeartIcon } from "../utilities/icons";

export default {
  title: "Example/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["success", "warning", "danger", "info", "base"],
      },
    },
    appearance: {
      control: {
        type: "select",
        options: ["filled", "ghost", "tint", "outline"],
      },
    },
    leadingElement: { control: "object" },
    trailingElement: { control: "object" },
    children: { control: "text" },
  },
} as Meta;

const Template: StoryFn = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "base",
  appearance: "filled",
  children: "Badge",
};

export const WithIcons = () => {
  return (
    <HorizontalLayout style={{ gap: 8 }}>
      <Badge leadingElement={HeartIcon}>Badge</Badge>
      <Badge trailingElement={HeartIcon}>Badge</Badge>
      <Badge leadingElement={HeartIcon} trailingElement={HeartIcon}>
        Badge
      </Badge>
    </HorizontalLayout>
  );
};

export const Appearance = () => {
  const appearances: any = ["filled", "outline", "ghost", "tint"];
  return (
    <HorizontalLayout style={{ gap: 4 }}>
      {appearances.map((key) => (
        <Badge appearance={key}>Badge</Badge>
      ))}
    </HorizontalLayout>
  );
};
