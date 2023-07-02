import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Badge } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/Badge",
  component: Badge,
  argTypes: {
    icon: { control: "object" },
    iconPosition: { control: { type: "select", options: ["left", "right"] } },
    variant: {
      control: {
        type: "select",
        options: ["success", "warning", "danger", "info"],
      },
    },
    children: { control: "text" },
  },
} as Meta;

const Template: StoryFn = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-heart">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    </>
  ),
  iconPosition: "left",
  variant: "success",
  children: "Badge",
};

export const WithIconOnRight = Template.bind({});
WithIconOnRight.args = {
  ...Default.args,
  iconPosition: "right",
};
