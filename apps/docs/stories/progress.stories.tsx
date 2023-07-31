import { Meta, StoryFn } from "@storybook/react";
import { Progress, VerticalLayout } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Components/Progress",
  component: Progress,
  argTypes: {
    size: { control: { type: "select" } },
    radius: { control: { type: "select" } },
    percentPosition: { control: { type: "select" } },
    percentPositionOutside: { control: { type: "select" } },
    percentPositionInside: { control: { type: "select" } },
    /*     appearance: {control: {type: "select",},}, */
    variant: { control: { type: "select" } },
    showPercent: { control: "boolean" },
    progress: { control: { type: "range", min: 0, max: 100, step: 0.01 } },
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
  showPercent: false,
  percentPosition: "outside",
  percentPositionOutside: "left",
  percentPositionInside: "center",
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
        <Progress key={variant.id} progress={25} radius="full" variant={variant.variant} size="medium">
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
        <Progress key={variant.id} progress={25} radius="full" variant="success" size={variant.size}>
          Click me
        </Progress>
      ))}
    </VerticalLayout>
  );
};

export const Radius = () => {
  const variants: any[] = [
    { id: 1, size: "none" },
    { id: 2, size: "full" },
  ];
  return (
    <VerticalLayout style={{ gap: 10, width: "32rem" }}>
      {variants.map((variant) => (
        <Progress key={variant.id} progress={25} radius={variant.size} variant="success" size="medium">
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
            percentPosition="outside"
            percentPositionOutside={key.pos}
            radius="full"
            variant="success"
            size="large">
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
            percentPosition="inside"
            percentPositionInside={key.pos}
            radius="full"
            variant="success"
            size="xlarge">
            Click me
          </Progress>
        ))}
      </VerticalLayout>
    </VerticalLayout>
  );
};
