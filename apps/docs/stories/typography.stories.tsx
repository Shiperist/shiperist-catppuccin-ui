import { Meta, StoryFn } from "@storybook/react";
import { Caption, Caption2, Link, Subtitle, Text, Title, VerticalLayout } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Typography/Typography",
  component: Text,
  argTypes: {
    as: { control: { type: "select" }, description: "Determines the as prop of the text." },
    error: {
      control: "boolean",
      description: "Whether the text is error. Can be used only in caption, caption2 and text element presets.",
    },
    bold: { control: "boolean", description: "Whether the text is bold." },
    italic: { control: "boolean", description: "Whether the text is italic." },
    underline: { control: "boolean", description: "Whether the text is underlined." },
  },
} as Meta;

const Template: StoryFn = (args) => <Text {...args}>This a preview text</Text>;

export const Default = Template.bind({});
Default.args = {
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
