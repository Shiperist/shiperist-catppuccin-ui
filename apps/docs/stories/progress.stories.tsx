import { Meta, StoryFn } from "@storybook/react";
import { Progress } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/Progress",
  component: Progress,
  argTypes: {
    size: {
      control: {
        type: "select",
      },
    },
    radius: {
      control: {
        type: "select",
      },
    },
    percentPosition: {
      control: {
        type: "select",
      },
    },
    percentPositionOutside: {
      control: {
        type: "select",
      },
    },
    percentPositionInside: {
      control: {
        type: "select",
      },
    },

    /*     variant: {
      control: {
        type: "select",
        options: ["linear", "radial"],
      },
    }, */
    color: {
      control: {
        type: "select",
        options: [
          "rosewater",
          "flamingo",
          "pink",
          "mauve",
          "red",
          "maroon",
          "peach",
          "yellow",
          "green",
          "teal",
          "blue",
          "sky",
          "sapphire",
          "lavender",
          "crust",
          "mantle",
          "base",
          "overlay0",
          "overlay1",
          "overlay2",
          "surface0",
          "surface1",
          "surface2",
        ],
      },
    },
    showPercent: { control: "boolean" },
    progress: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 0.01,
      },
    },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <div style={{ width: "32rem" }}>
    <Progress {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  progress: 25,
  size: "medium",
  radius: "full",
  color: "green",
  showPercent: false,
  percentPosition: "outside",
  percentPositionOutside: "left",
  percentPositionInside: "center",
  /* variant: "linear", */
};
