import { Meta, StoryFn } from "@storybook/react";
import {
  Tooltip,
  HorizontalLayout,
  Card,
  IndicatorLabel,
  Button,
  VerticalLayout,
} from "@shiperist-catppuccin-ui/react";

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
    <div className="flex h-16 items-center justify-center" style={{ width: "32rem" }}>
      <div style={{ position: "relative" }}>
        <Tooltip text={args.text} {...args}>
          <Button>Hover me</Button>
        </Tooltip>
      </div>
    </div>
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

export const Positions = () => {
  const positions: any[] = [
    { id: 1, position: "Left" },
    { id: 2, position: "Top" },
    { id: 3, position: "Bottom" },
    { id: 4, position: "Right" },
  ];

  const chunkedPositions = [];
  for (let i = 0; i < positions.length; i += 2) {
    chunkedPositions.push(positions.slice(i, i + 2));
  }

  return (
    <div className="flex h-96 items-center justify-center" style={{ width: "32rem" }}>
      <VerticalLayout style={{ gap: 8 }}>
        {chunkedPositions.map((row, rowIndex) => (
          <div className="flex" key={rowIndex}>
            {row.map((item) => (
              <div
                key={item.id}
                style={{
                  position: "relative",
                }}>
                <Tooltip text={item.position.toLowerCase()} position={item.position.toLowerCase()} visible>
                  <Button className="w-32">{item.position}</Button>
                </Tooltip>
              </div>
            ))}
          </div>
        ))}
      </VerticalLayout>
    </div>
  );
};
