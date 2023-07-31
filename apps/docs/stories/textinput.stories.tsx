import { Meta, StoryFn } from "@storybook/react";
import { Text, TextInput, VerticalLayout } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Forms/TextInput",
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
    type: { control: { type: "select" } },
    size: { control: { type: "select" } },
    appearance: { control: { type: "select" } },
    labelStyle: { control: { type: "select" } },
    leadingElement: { control: "object" },
    trailingElement: { control: "object" },
  },
} as Meta;

const Template: StoryFn = (args) => <TextInput {...args} style={{ width: "32rem" }} />;

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
  error: false,
  disabled: false,
  caption: "",
  appearance: "outline",
  required: false,
  size: "medium",
  label: "",
  type: "text",
  placeholder: "",
  errorIcon: false,
  labelStyle: "default",
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  ...Default.args,
  isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
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

export const DisabledState = Template.bind({});
DisabledState.args = {
  ...Default.args,
  disabled: true,
};

export const WithCaption = Template.bind({});
WithCaption.args = {
  ...Default.args,
  caption: "This is a caption",
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  ...Default.args,
  placeholder: "This is a placeholder",
};

export const LabelAppearence = () => {
  return (
    <VerticalLayout style={{ gap: 12, width: "32rem" }}>
      <Text bold>Default</Text>
      <TextInput {...Default.args} label="This is a label"></TextInput>
      <Text bold>(in) Border</Text>
      <TextInput {...Default.args} labelStyle="border" label="This is a label"></TextInput>
      <Text bold>Default with required</Text>
      <TextInput {...Default.args} required label="This is a label"></TextInput>
      <Text bold>(in) Border with required</Text>
      <TextInput {...Default.args} labelStyle="border" required label="This is a label"></TextInput>
    </VerticalLayout>
  );
};

export const Appearences = () => {
  return (
    <VerticalLayout style={{ gap: 12, width: "32rem" }}>
      <Text bold>Default</Text>
      <TextInput {...Default.args}></TextInput>
      <Text bold>Underline</Text>
      <TextInput {...Default.args} appearance="underline"></TextInput>
      <Text bold>Filled</Text>
      <TextInput {...Default.args} appearance="filled"></TextInput>
    </VerticalLayout>
  );
};

export const Sizes = () => {
  const variants: any[] = [
    { id: 1, size: "small" },
    { id: 2, size: "medium" },
    { id: 3, size: "large" },
  ];
  return (
    <VerticalLayout style={{ gap: 10, width: "32rem" }}>
      {variants.map((variant) => (
        <TextInput key={variant.id} size={variant.size}></TextInput>
      ))}
    </VerticalLayout>
  );
};

export const Types = () => {
  return (
    <VerticalLayout style={{ gap: 12, width: "32rem" }}>
      <Text bold>Text</Text>
      <TextInput {...Default.args}></TextInput>
      <Text bold>Password</Text>
      <TextInput {...Default.args} type="password"></TextInput>
    </VerticalLayout>
  );
};
