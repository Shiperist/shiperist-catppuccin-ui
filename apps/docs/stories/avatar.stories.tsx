import { Meta, StoryFn } from "@storybook/react";
import {
  Avatar,
  Card,
  Text,
  VerticalLayout,
  Caption,
  Caption2,
  AvatarLabel,
  HorizontalLayout,
} from "@shiperist-catppuccin-ui/react";
import avatar from "../assets/avatar.png";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    radius: { control: { type: "select" } },
    size: { control: { type: "select" } },
    backgroundColor: { control: { type: "select" } },
    defaultAvatar: { control: "text" },
    isLoading: { control: "boolean" },
    alt: { control: "text" },
    avatar: { control: "text" },
  },
} as Meta;

const Template: StoryFn = (args) => {
  const people = [
    { id: 1, name: "Joseph Deor", job: "Developer, UI/UX", lastSeen: "2h" },
  ];
  return (
    <>
      {people.map((person) => (
        <Card
          key={person.id}
          orientation="horizontal"
          appearance="outline"
          className="p-4"
          gap="1rem"
        >
          <Avatar {...args}>
            <AvatarLabel name={person.name}></AvatarLabel>
          </Avatar>
          <VerticalLayout>
            <Text>{person.name}</Text>
            <Caption bold>{person.job}</Caption>
            <Caption2 className="text-overlay0">
              Last activity: {person.lastSeen} ago
            </Caption2>
          </VerticalLayout>
        </Card>
      ))}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  radius: "large",
  size: "large",
  avatar: avatar,
  alt: "Pretty avatar",
  backgroundColor: "green",
  isLoading: false,
  defaultAvatar: "",
};

export const LoadingState = () => {
  return (
    <Card
      orientation="horizontal"
      appearance="outline"
      className="p-4"
      gap="1rem"
    >
      <Avatar
        isLoading
        backgroundColor="surface0"
        alt="Pretty avatar"
        size="large"
      >
        <AvatarLabel name="Joseph Deor"></AvatarLabel>
      </Avatar>
      <VerticalLayout>
        <Text>Joseph Deor</Text>
        <Caption bold>Developer, UI/UX</Caption>
        <Caption2 className="text-overlay0">Last activity: 2h ago</Caption2>
      </VerticalLayout>
    </Card>
  );
};

export const Initials = () => {
  return (
    <Card
      orientation="horizontal"
      appearance="outline"
      className="p-4"
      gap="1rem"
    >
      <Avatar backgroundColor="green" alt="Pretty avatar" size="large">
        <AvatarLabel name="Joseph Deor"></AvatarLabel>
      </Avatar>
      <VerticalLayout>
        <Text>Joseph Deor</Text>
        <Caption bold>Developer, UI/UX</Caption>
        <Caption2 className="text-overlay0">Last activity: 2h ago</Caption2>
      </VerticalLayout>
    </Card>
  );
};

export const Sizes = () => {
  const sizes: any[] = [
    { id: 1, size: "small" },
    { id: 2, size: "medium" },
    { id: 3, size: "large" },
    { id: 4, size: "xlarge" },
  ];
  return (
    <HorizontalLayout style={{ gap: 8 }}>
      {sizes.map((key) => (
        <Avatar
          key={key.id}
          alt="Pretty avatar"
          size={key.size}
          backgroundColor="green"
        ></Avatar>
      ))}
    </HorizontalLayout>
  );
};

export const Radius = () => {
  const sizes: any[] = [
    { id: 1, radius: "none" },
    { id: 2, radius: "large" },
    { id: 3, radius: "full" },
  ];
  return (
    <HorizontalLayout style={{ gap: 8 }}>
      {sizes.map((key) => (
        <Avatar
          key={key.id}
          alt="Pretty avatar"
          size="large"
          radius={key.radius}
          backgroundColor="green"
        ></Avatar>
      ))}
    </HorizontalLayout>
  );
};
