import { Meta, StoryFn } from "@storybook/react";
import { TextInput, VerticalLayout } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Forms/TextInput",
  component: TextInput,
  argTypes: {
    isLoading: { control: "boolean", description: "Whether the text input is loading." },
    error: { control: "boolean", description: "Whether the text input has error." },
    disabled: { control: "boolean", description: "Whether the text input is disabled." },
    errorIcon: { control: "boolean", description: "Whether to show the error icon when error is set to true." },
    required: { control: "boolean", description: "Whether the text input is required." },
    caption: {
      control: "text",
      description: "Determines the caption text of the text input. Shown red if error is set to true",
    },
    placeholder: { control: "text", description: "Determines the placeholder of the text input." },
    label: { control: "text", description: "Determines the label of the text input." },
    type: { control: { type: "select" }, description: "Determines the type of the text input." },
    size: { control: { type: "select" }, description: "Determines the size of the text input." },
    appearance: { control: { type: "select" }, description: "Determines the appearance style of the text input." },
    labelStyle: { control: { type: "select" }, description: "Determines the label style of the text input." },
    leadingElement: { control: "object", description: "Sets an element/s on the left side of the text input." },
    trailingElement: { control: "object", description: "Sets an element/s on the right side of the text input." },
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
    <VerticalLayout style={{ gap: 16, width: "32rem" }}>
      <TextInput {...Default.args} label="This is a label" defaultValue="Some text"></TextInput>
      <TextInput {...Default.args} labelStyle="border" label="This is a label" defaultValue="Some text"></TextInput>
      <TextInput {...Default.args} required label="This is a label" defaultValue="Some text"></TextInput>
    </VerticalLayout>
  );
};

export const Appearences = () => {
  return (
    <VerticalLayout style={{ gap: 12, width: "32rem" }}>
      <TextInput {...Default.args} defaultValue="Some text"></TextInput>
      <TextInput {...Default.args} appearance="underline" defaultValue="Some text"></TextInput>
      <TextInput {...Default.args} appearance="filled" defaultValue="Some text"></TextInput>
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
        <TextInput key={variant.id} size={variant.size} defaultValue="Some text"></TextInput>
      ))}
    </VerticalLayout>
  );
};

export const Types = () => {
  return (
    <VerticalLayout style={{ gap: 12, width: "32rem" }}>
      <TextInput {...Default.args} placeholder="Text"></TextInput>
      <TextInput {...Default.args} type="password" placeholder="Password"></TextInput>
    </VerticalLayout>
  );
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  ...Default.args,
  disabled: true,
};
