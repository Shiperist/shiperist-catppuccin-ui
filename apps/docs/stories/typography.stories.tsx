import { Meta, StoryFn } from "@storybook/react";
import { Caption, Caption2, Link, Subtitle, Text, Title, VerticalLayout } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Typography/Typography",
  component: Text,
  argTypes: {
    as: { control: { type: "select" } },
    error: { control: "boolean" },
    bold: { control: "boolean" },
    italic: { control: "boolean" },
    underline: { control: "boolean" },
  },
  children: { control: "text" },
} as Meta;

const Template: StoryFn = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "This a preview text",
  as: "span",
  error: false,
  bold: false,
  italic: false,
  underline: false,
};

export const Presets = () => (
  <VerticalLayout style={{ gap: 8 }}>
    <Caption2>Caption2</Caption2>
    <Caption>Caption</Caption>
    <Text>Text</Text>
    <Link>Link</Link>
    <Subtitle>Subtitle</Subtitle>
    <Title>Title</Title>
  </VerticalLayout>
);

export const Bold = () => <Text bold>Bold text</Text>;
export const Italic = () => <Text italic>Italic text</Text>;
export const Error = () => <Text error>Error text</Text>;
export const Underline = () => <Text underline>Underline text</Text>;
Error.parameters = {
  docs: {
    description: {
      story: "Can be used only in caption, caption2 and text element.",
    },
  },
};
