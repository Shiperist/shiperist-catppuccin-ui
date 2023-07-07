import { Meta, StoryFn } from "@storybook/react";
import { TextInput } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/TextInput",
  component: TextInput,
  argTypes: {
    loading: { control: "boolean" },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
    caption: { control: "text" },
    appearance: {
      control: {
        type: "select",
        options: ["outline", "underline"],
      },
    },
    leadingElement: { control: "object" },
    trailingElement: { control: "object" },
  },
} as Meta;

const Template: StoryFn = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  loading: false,
  error: false,
  disabled: false,
  caption: "This is a caption",
  appearance: "outline",
};
