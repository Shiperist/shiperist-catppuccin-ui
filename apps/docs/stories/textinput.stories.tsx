import { Meta, StoryFn } from "@storybook/react";
import { TextInput } from "@shiperist-catppuccin-ui/react";
import { Appearance } from "./badge.stories";

export default {
  title: "Example/TextInput",
  component: TextInput,
  argTypes: {
    loading: { control: "boolean" },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
    caption: { control: "text" },
    placeholder: { control: "text" },
    type: {
      control: {
        type: "select",
        options: ["text", "password"],
      },
    },
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
  caption: "",
  appearance: "outline",
  type: "text",
  placeholder: "",
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  caption: "This a error/caption message (optional)",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithCaption = Template.bind({});
WithCaption.args = {
  caption: "This is a caption",
};

export const UnderlineAppearence = Template.bind({});
UnderlineAppearence.args = {
  appearance: "underline",
};
