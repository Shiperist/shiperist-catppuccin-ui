import { Meta, StoryFn } from "@storybook/react";
import { Badge, HorizontalLayout } from "@shiperist-catppuccin-ui/react";
import { leadingElement, trailingElement } from "../utilities/icons";

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
      <Badge leadingElement={leadingElement}>Badge</Badge>
      <Badge trailingElement={trailingElement}>Badge</Badge>
      <Badge leadingElement={leadingElement} trailingElement={trailingElement}>
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
