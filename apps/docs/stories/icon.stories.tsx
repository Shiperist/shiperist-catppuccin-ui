import { Meta, StoryFn } from "@storybook/react";
import { Icon, HorizontalLayout } from "@shiperist-catppuccin-ui/react";
import { HeartIcon } from "@shiperist-catppuccin-ui/utilities";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    size: { control: { type: "select" }, description: "Determines the size of the icon." },
    icon: { control: { type: "object" }, description: "Determines the icon of the icon component." },
    color: { control: { type: "select" }, description: "Determines the color of the icon." },
  },
} as Meta;

const Template: StoryFn = (args) => {
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
    { id: 1, size: "tiny" },
    { id: 2, size: "small" },
    { id: 3, size: "medium" },
    { id: 4, size: "large" },
    { id: 5, size: "xlarge" },
  ];
  return (
    <HorizontalLayout style={{ gap: 10 }}>
      {variants.map((variant) => (
        <Icon icon={<HeartIcon />} key={variant.id} color="overlay2" size={variant.size}></Icon>
      ))}
    </HorizontalLayout>
  );
};
