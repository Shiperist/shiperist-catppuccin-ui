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
    placeholder: { control: "text" },
    label: { control: "text" },
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
  label: "",
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
  caption: "This is a error/caption message (optional) // shown red only if error is set to true",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithCaption = Template.bind({});
WithCaption.args = {
  caption: "This is a caption (optional)",
};

export const UnderlineAppearence = Template.bind({});
UnderlineAppearence.args = {
  appearance: "underline",
};

export const WithAPlaceholder = Template.bind({});
WithAPlaceholder.args = {
  placeholder: "This is a placeholder (optional)",
};

export const WithALabel = Template.bind({});
WithALabel.args = {
  label: "This is a label (optional)",
};
