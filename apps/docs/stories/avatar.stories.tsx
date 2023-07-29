import { Meta, StoryFn } from "@storybook/react";
import { Avatar, Card, Text, VerticalLayout, Caption, Caption2, AvatarLabel } from "@shiperist-catppuccin-ui/react";
import avatar from "../assets/avatar.png";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    radius: { control: { type: "select" } },
    size: { control: { type: "select" } },
    border: { control: { type: "select" } },
    backgroundColor: { control: { type: "select" } },
    defaultAvatar: { control: "text" },
    isLoading: { control: "boolean" },
    alt: { control: "text" },
    avatar: { control: "text" },
  },
} as Meta;

const Template: StoryFn = (args) => {
  const people = [{ id: 1, name: "Joseph Deor", job: "Developer, UI/UX", lastSeen: "2h" }];
  return (
    <>
      {people.map((person) => (
        <Card key={person.id} orientation="horizontal" appearance="outline" className="p-4" gap="1rem">
          <Avatar {...args}>
            <AvatarLabel name={person.name}></AvatarLabel>
          </Avatar>
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
  isLoading: false,
  defaultAvatar: "",
  border: "none",
};
