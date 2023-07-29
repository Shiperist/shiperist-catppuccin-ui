import { Meta, StoryFn } from "@storybook/react";
import { Badge, HorizontalLayout, Icon } from "@shiperist-catppuccin-ui/react";
import { HeartIcon } from "@shiperist-catppuccin-ui/utilities";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: { control: { type: "select" } },
    appearance: { control: { type: "select" } },
    leadingElement: { control: "object" },
    trailingElement: { control: "object" },
    children: { control: "text" },
  },
} as Meta;

const icon = <Icon icon={<HeartIcon />} size="small" />;
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
        <Badge {...Default.args} key={appearance.id} leadingElement={icon} appearance={appearance.name}>
          Badge
        </Badge>
      ))}
    </HorizontalLayout>
  );
};
