import { Meta, StoryFn } from "@storybook/react";
import { Progress, VerticalLayout } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Components/Progress",
  component: Progress,
  argTypes: {
    thickness: { control: { type: "select" }, description: "Determines the size of the progress bar." },
    shape: { control: { type: "select" }, description: "Determines the shape of the progress bar." },
    percentBoundary: {
      control: { type: "select" },
      description: "Determines whether to display the percentage outside or inside the progress bar.",
    },
    percentPosition: {
      control: { type: "select" },
      description: "Outside boundary allows only left/right, inside boundary allows all positions listed.",
    },
    /*     appearance: {control: {type: "select",},}, */
    variant: { control: { type: "select" }, description: "Determines the color variant of the progress bar." },
    showPercent: { control: "boolean", description: "Whether to show the percentage." },
    progress: {
      control: { type: "range", min: 0, max: 100, step: 0.01 },
      description: "Determines the progress of progress bar.",
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
  thickness: "medium",
  shape: "circular",
  showPercent: false,
  variant: "success",
  percentBoundary: "outside",
  percentPosition: "left",
  /* appearance: "linear", */
};

export const Variants = () => {
  const variants: any[] = [
    { id: 1, variant: "base" },
    { id: 2, variant: "success" },
    { id: 3, variant: "warning" },
    { id: 4, variant: "info" },
    { id: 5, variant: "danger" },
  ];
  return (
    <VerticalLayout style={{ gap: 10, width: "32rem" }}>
      {variants.map((variant) => (
        <Progress key={variant.id} progress={25} shape="circular" variant={variant.variant} thickness="medium">
          Click me
        </Progress>
      ))}
    </VerticalLayout>
  );
};

export const Sizes = () => {
  const variants: any[] = [
    { id: 1, size: "small" },
    { id: 2, size: "medium" },
    { id: 3, size: "large" },
    { id: 4, size: "xlarge" },
  ];
  return (
    <VerticalLayout style={{ gap: 10, width: "32rem" }}>
      {variants.map((variant) => (
        <Progress key={variant.id} progress={25} shape="circular" variant="success" thickness={variant.size}>
          Click me
        </Progress>
      ))}
    </VerticalLayout>
  );
};

export const Shapes = () => {
  const variants: any[] = [
    { id: 1, shape: "square" },
    { id: 2, shape: "circular" },
  ];
  return (
    <VerticalLayout style={{ gap: 10, width: "32rem" }}>
      {variants.map((variant) => (
        <Progress key={variant.id} progress={25} shape={variant.shape} variant="success" thickness="medium">
          Click me
        </Progress>
      ))}
    </VerticalLayout>
  );
};

export const WithPercentage = () => {
  const outsidePercent: any[] = [
    { id: 1, pos: "left" },
    { id: 2, pos: "right" },
  ];
  const insidePercent: any[] = [
    { id: 1, pos: "left" },
    { id: 2, pos: "center" },
    { id: 3, pos: "right" },
  ];
  return (
    <VerticalLayout style={{ gap: 10, width: "32rem" }}>
      <VerticalLayout style={{ gap: 10 }}>
        {outsidePercent.map((key) => (
          <Progress
            key={key.id}
            showPercent
            progress={25}
            percentBoundary="outside"
            percentPosition={key.pos}
            shape="circular"
            variant="success"
            thickness="large">
            Click me
          </Progress>
        ))}
      </VerticalLayout>
      <VerticalLayout style={{ gap: 10 }}>
        {insidePercent.map((key) => (
          <Progress
            key={key.id}
            showPercent
            className="text-base"
            progress={25}
            percentBoundary="inside"
            percentPosition={key.pos}
            shape="circular"
            variant="success"
            thickness="xlarge">
            Click me
          </Progress>
        ))}
      </VerticalLayout>
    </VerticalLayout>
  );
};
