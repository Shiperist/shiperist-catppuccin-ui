import { Meta, StoryFn } from "@storybook/react";
import { Textarea, VerticalLayout } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Forms/Textarea",
  component: Textarea,
  argTypes: {
    disabled: { control: "boolean", description: "Whether the text area is disabled." },
    placeholder: { control: "text", description: "Determines the placeholder of the text area." },
    value: { control: "text", description: "Determines the value of the text area." },
    defaultValue: { control: "text", description: "Determines the default value of the text area." },
    size: { control: { type: "select" }, description: "Determines the size of the text area." },
    resize: { control: { type: "select" }, description: "Determines the size of the text area." },
  },
} as Meta;

const Template: StoryFn = (args) => <Textarea {...args} style={{ width: "32rem" }} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  placeholder: "",
  value: "",
  defaultValue: "",
  size: "medium",
  resize: "none",
};
export const Placeholder = () => {
  return (
    <div style={{ width: "32rem" }}>
      <Textarea placeholder="This is a placeholder"></Textarea>
    </div>
  );
};

export const Sizes = () => {
  const sizes: any[] = [
    { id: 1, size: "small" },
    { id: 2, size: "medium" },
    { id: 3, size: "large" },
  ];
  return (
    <VerticalLayout style={{ gap: 8, width: "32rem" }}>
      {sizes?.map((size) => (
        <Textarea key={size.id} size={size.size} defaultValue="Some text"></Textarea>
      ))}
    </VerticalLayout>
  );
};

export const Resize = () => {
  const resizes: any[] = [
    { id: 1, resize: "none" },
    { id: 2, resize: "vertical" },
    { id: 3, resize: "horizontal" },
    { id: 4, resize: "both" },
  ];
  return (
    <VerticalLayout style={{ gap: 8, width: "32rem" }}>
      {resizes?.map((resize) => (
        <Textarea
          key={resize.id}
          resize={resize.resize}
          style={{ minWidth: "32rem", minHeight: "4rem" }}
          defaultValue="Some text"></Textarea>
      ))}
    </VerticalLayout>
  );
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  ...Default.args,
  disabled: true,
};
