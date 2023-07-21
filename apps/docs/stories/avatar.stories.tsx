import { Meta, StoryFn } from "@storybook/react";
import { Avatar, Card, Text, VerticalLayout, Caption, Caption2 } from "@shiperist-catppuccin-ui/react";
import avatar from "../assets/avatar.png";

export default {
  title: "Example/Avatar",
  component: Avatar,
  argTypes: {
    radius: {
      control: {
        type: "select",
        options: ["full", "lg", "md", "sm"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["xlarge", "large", "medium", "small", "tiny"],
      },
    },
    border: {
      control: {
        type: "select",
        options: ["xlarge", "large", "medium", "small", "none"],
      },
    },
    backgroundColor: {
      control: {
        type: "select",
        options: [
          "rosewater",
          "flamingo",
          "pink",
          "mauve",
          "red",
          "maroon",
          "peach",
          "yellow",
          "green",
          "teal",
          "blue",
          "sky",
          "sapphire",
          "lavender",
          "crust",
          "mantle",
          "base",
          "overlay0",
          "overlay1",
          "overlay2",
          "surface0",
          "surface1",
          "surface2",
        ],
      },
    },
    defaultAvatar: { control: "text" },
    isLoading: { control: "boolean" },
    alt: { control: "text" },
    avatar: { control: "text" },
    name: { control: "text" },
  },
} as Meta;

const Template: StoryFn = (args) => {
  const people = [{ id: 1, name: "Joseph Deor", job: "Developer, UI/UX", lastSeen: "2h" }];
  return (
    <>
      {people.map((person) => (
        <Card key={person.id} orientation="horizontal" style={{ gap: 16 }}>
          <Avatar name={person.name} {...args} />
          <VerticalLayout>
            <Text>{person.name}</Text>
            <Caption bold>{person.job}</Caption>
            <Caption2 className="text-overlay0">Last activity: {person.lastSeen} ago</Caption2>
          </VerticalLayout>
        </Card>
      ))}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  radius: "full",
  size: "medium",
  avatar: avatar,
  alt: "Pretty avatar",
  backgroundColor: "green",
  name: "Joseph Deor",
  isLoading: false,
  defaultAvatar: "",
  border: "none",
};
