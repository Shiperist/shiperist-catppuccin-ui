import { Meta, StoryFn } from "@storybook/react";
import {
  Avatar,
  AvatarProps,
  Card,
  Text,
  VerticalLayout,
  Caption,
  Caption2,
  AvatarLabel,
  HorizontalLayout,
} from "@shiperist-catppuccin-ui/react";
import { UserCircleIcon } from "@shiperist-catppuccin-ui/utilities";
import avatar from "../assets/avatar.png";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    shape: { control: { type: "select" }, description: "Determines the shape of the avatar." },
    size: { control: { type: "select" }, description: "Determines the size of the avatar." },
    backgroundColor: {
      control: { type: "select" },
      description: "Determines the background color of the avatar if avatar/default avatar isn't set.",
    },
    defaultImage: {
      control: "text",
      description: "Sets the default image of the avatar, that will be shown as a default.",
    },
    isLoading: { control: "boolean", description: "Whether is avatar loading." },
    alt: { control: "text", description: "Determines the alt of the avatar's image." },
    image: { control: "text", description: "Sets the image of the avatar." },
    icon: {
      control: "object",
      description: "Determines the icon of the avatar, that will be shown if avatar/default avatar isn't set.",
    },
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
  shape: "rounded",
  size: "large",
  image: avatar,
  alt: "Pretty avatar",
  backgroundColor: "green",
  isLoading: false,
  defaultImage: "",
};

export const WithIcon = () => {
  return (
    <Card orientation="horizontal" appearance="outline" className="p-4" gap="1rem">
      <Avatar icon={<UserCircleIcon className="h-9 w-9" />} backgroundColor="surface0" alt="Pretty avatar" size="large">
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

export const LoadingState = () => {
  return (
    <Card orientation="horizontal" appearance="outline" className="p-4" gap="1rem">
      <Avatar isLoading backgroundColor="surface0" alt="Pretty avatar" size="large">
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
    <Card orientation="horizontal" appearance="outline" className="p-4" gap="1rem">
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
        <Avatar key={key.id} alt="Pretty avatar" size={key.size} backgroundColor="green"></Avatar>
      ))}
    </HorizontalLayout>
  );
};

export const Shapes = () => {
  const sizes: any[] = [
    { id: 1, shape: "square" },
    { id: 2, shape: "rounded" },
    { id: 3, shape: "circular" },
  ];
  return (
    <HorizontalLayout style={{ gap: 8 }}>
      {sizes.map((key) => (
        <Avatar key={key.id} alt="Pretty avatar" size="large" shape={key.shape} backgroundColor="green"></Avatar>
      ))}
    </HorizontalLayout>
  );
};
