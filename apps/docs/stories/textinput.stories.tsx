import { Meta, StoryFn } from "@storybook/react";
import { Text, TextInput, VerticalLayout } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/TextInput",
  component: TextInput,
  argTypes: {
    isLoading: { control: "boolean" },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
    errorIcon: { control: "boolean" },
    required: { control: "boolean" },
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
        options: ["outline", "underline", "filled"],
      },
    },
    labelStyle: {
      control: {
        type: "select",
        options: ["default", "border"],
      },
    },
    leadingElement: { control: "object" },
    trailingElement: { control: "object" },
  },
} as Meta;

const Template: StoryFn = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
  error: false,
  disabled: false,
  caption: "",
  appearance: "outline",
  required: false,
  label: "",
  type: "text",
  placeholder: "",
  errorIcon: false,
  labelStyle: "default",
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  caption: "This is a error/caption message",
  errorIcon: true,
};
Error.parameters = {
  docs: {
    description: {
      story:
        "Caption shown red only if error is set to **true**, errorIcon shown only if errorIcon is set to **true** - on default it's off",
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithCaption = Template.bind({});
WithCaption.args = {
  caption: "This is a caption",
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: "This is a placeholder",
};

export const LabelAppearence = () => {
  return (
    <VerticalLayout style={{ gap: 12 }}>
      <Text bold>Default</Text>
      <TextInput label="This is a label"></TextInput>
      <Text bold>(in) Border</Text>
      <TextInput labelStyle="border" label="This is a label"></TextInput>
      <Text bold>Default with required</Text>
      <TextInput required label="This is a label"></TextInput>
      <Text bold>(in) Border with required</Text>
      <TextInput labelStyle="border" required label="This is a label"></TextInput>
    </VerticalLayout>
  );
};

export const Appearence = () => {
  return (
    <VerticalLayout style={{ gap: 12 }}>
      <Text bold>Default</Text>
      <TextInput></TextInput>
      <Text bold>Underline</Text>
      <TextInput appearance="underline"></TextInput>
      <Text bold>Filled</Text>
      <TextInput appearance="filled"></TextInput>
    </VerticalLayout>
  );
};

export const Types = () => {
  return (
    <VerticalLayout style={{ gap: 12 }}>
      <Text bold>Text</Text>
      <TextInput></TextInput>
      <Text bold>Password</Text>
      <TextInput type="password"></TextInput>
    </VerticalLayout>
  );
};
