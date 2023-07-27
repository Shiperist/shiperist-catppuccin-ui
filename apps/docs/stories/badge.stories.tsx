import { Meta, StoryFn } from "@storybook/react";
import { Badge, HorizontalLayout } from "@shiperist-catppuccin-ui/react";
import { HeartIcon } from "../utilities/icons";

export default {
  title: "Example/Badge",
  component: Badge,
  argTypes: {
    variant: { control: { type: "select" } },
    appearance: { control: { type: "select" } },
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
      <Badge {...Default.args} leadingElement={HeartIcon}>
        Badge
      </Badge>
      <Badge {...Default.args} trailingElement={HeartIcon}>
        Badge
      </Badge>
      <Badge {...Default.args} leadingElement={HeartIcon} trailingElement={HeartIcon}>
        Badge
      </Badge>
    </HorizontalLayout>
  );
};

export const Appearance = () => {
  const appearances: any[] = [
    { id: 1, name: "filled" },
    { id: 2, name: "outline" },
    { id: 3, name: "ghost" },
    { id: 4, name: "tint" },
  ];
  return (
    <HorizontalLayout style={{ gap: 4 }}>
      {appearances.map((appearance) => (
        <Badge {...Default.args} key={appearance.id} appearance={appearance.name}>
          Badge
        </Badge>
      ))}
    </HorizontalLayout>
  );
};
