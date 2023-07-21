import { Meta, StoryFn } from "@storybook/react";
import { Avatar, Indicator, Card, Text, VerticalLayout, Caption, Caption2 } from "@shiperist-catppuccin-ui/react";
import avatar from "../assets/avatar.png";

export default {
  title: "Example/Indicator",
  component: Indicator,
  children: { control: "text" },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["medium", "small", "tiny"],
      },
    },
    position: {
      control: {
        type: "object",
      },
    },
    color: {
      control: {
        type: "select",
        options: ["success", "warning", "danger", "info", "base"],
      },
    },
  },
} as Meta;

const Template: StoryFn = (args) => {
  const people = [{ id: 1, name: "Joseph Deor", job: "Developer, UI/UX", lastSeen: "2h" }];
  return (
    <>
      {people.map((person) => (
        <Avatar avatar={avatar} size="medium" name={person.name} key={person.id}>
          <div className="flex mt-auto mr-auto">
            <Indicator {...args} className=" mt-auto" />
          </div>
        </Avatar>
      ))}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: "",
  size: "medium",
  color: "danger",
};
