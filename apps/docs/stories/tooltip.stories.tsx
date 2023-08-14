import { Meta, StoryFn } from "@storybook/react";
import { Tooltip, HorizontalLayout, Card, IndicatorLabel, Button } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    position: { control: { type: "select" }, description: "Determines the custom position of the tooltip." },
    text: {
      control: "object",
      description:
        "Determines the text of the tooltip, you can use a div with many text components, for example mix of text and links",
    },
    showDelay: {
      control: "number",
      description:
        "Determines the delay in milliseconds before the tooltip is displayed. The tooltip will become visible after hovering over the element for this duration.",
    },
    hideDelay: {
      control: "number",
      description:
        "Determines the delay in milliseconds before the tooltip is hidden. The tooltip will be hidden after moving the cursor away from the element for this duration.",
    },
    children: {
      control: "object",
      description: "Determines the children of the tooltip, for example a button.",
    },
    visible: {
      control: "boolean",
      description:
        "Whether is the tooltip visible, if not set - default will be used. If set to true the tooltip on hover will be shown all the time",
    },
  },
} as Meta;

const Template: StoryFn = (args) => {
  return (
    <Tooltip text={args.text} {...args}>
      <Button>Click me</Button>
    </Tooltip>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: {},
  position: "top",
  visible: false,
  text: "Tooltip text",
  showDelay: 250,
  hideDelay: 250,
};
