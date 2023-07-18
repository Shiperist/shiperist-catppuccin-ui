import { Meta, StoryFn } from "@storybook/react";
import { Select, SelectItem } from "@shiperist-catppuccin-ui/react";
import { leadingElement } from "../utilities/icons";

export default {
  title: "Example/Select",
  component: Select,
  argTypes: {
    disabled: { control: "boolean" },
    placeholder: { control: "string" },
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
  placeholder: "Select items...",
};
