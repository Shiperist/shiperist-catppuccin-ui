import { Meta, StoryFn } from "@storybook/react";
import { Progress } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Example/Progress",
  component: Progress,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large", "xlarge"],
      },
    },
    radius: {
      control: {
        type: "select",
        options: ["full", "large", "medium", "small"],
      },
    },
    percentPosition: {
      control: {
        type: "select",
        options: ["outside", "inside"],
      },
    },
    percentPositionOutside: {
      control: {
        type: "select",
        options: ["left", "right"],
      },
    },
    percentPositionInside: {
      control: {
        type: "select",
        options: ["left", "right", "center"],
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

const Template: StoryFn = (args) => <Progress {...args} />;

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
