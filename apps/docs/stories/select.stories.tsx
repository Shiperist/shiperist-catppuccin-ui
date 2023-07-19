import { Meta, StoryFn } from "@storybook/react";
import { Select, SelectItem } from "@shiperist-catppuccin-ui/react";
import { leadingElement } from "../utilities/icons";

export default {
  title: "Example/Select",
  component: Select,
  argTypes: {
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
    defaultValue: { control: "text" },
    as: { control: { type: "select", options: ["button", "input"] } },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Select {...args}>
    <SelectItem leadingElement={leadingElement} id="item1">
      Select one
    </SelectItem>
    <SelectItem id="item2">Select two</SelectItem>
    <SelectItem leadingElement={leadingElement} id="item3">
      Select three
    </SelectItem>
  </Select>
);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  placeholder: "",
  defaultValue: "Default value",
  as: "button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: "Select items...",
};
