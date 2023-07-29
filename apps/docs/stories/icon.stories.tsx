import { Meta, StoryFn } from "@storybook/react";
import { Icon, HorizontalLayout } from "@shiperist-catppuccin-ui/react";
import { HeartIcon } from "@shiperist-catppuccin-ui/utilities";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    size: { control: { type: "select" } },
    icon: { control: { type: "object" } },
  },
} as Meta;

const Template: StoryFn = (args) => {
  const icons: any[] = [
    { id: "1", size: "small" },
    { id: "2", size: "medium" },
    { id: "3", size: "large" },
    { id: "4", size: "xlarge" },
  ];
  return (
    <HorizontalLayout style={{ gap: 16 }}>
      {icons.map((icon) => (
        <Icon key={icon.id} icon={<HeartIcon />} size={icon.size}></Icon>
      ))}
    </HorizontalLayout>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: "",
  icon: "",
};
