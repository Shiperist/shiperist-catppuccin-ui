import { Meta, StoryFn } from "@storybook/react";
import { Icon, HorizontalLayout } from "@shiperist-catppuccin-ui/react";
import { HeartIcon } from "@shiperist-catppuccin-ui/utilities";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    size: { control: { type: "select" } },
    icon: { control: { type: "object" } },
    color: { control: { type: "select" } },
  },
} as Meta;

const Template: StoryFn = (args) => {
  const icons: any[] = [
    { id: "1", size: "small" },
    { id: "2", size: "medium" },
    { id: "3", size: "large" },
    { id: "4", size: "xlarge" },
  ];
  return <Icon {...args} icon={<HeartIcon />} size="medium"></Icon>;
};

export const Default = Template.bind({});
Default.args = {
  size: "",
  icon: "",
  color: "overlay2",
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
        <Icon icon={<HeartIcon />} key={variant.id} color="overlay2" size={variant.size}></Icon>
      ))}
    </HorizontalLayout>
  );
};
