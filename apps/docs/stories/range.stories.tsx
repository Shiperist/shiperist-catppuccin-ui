import { Meta, StoryFn } from "@storybook/react";
import { Range, VerticalLayout } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Forms/Range",
  component: Range,
  argTypes: {
    disabled: { control: "boolean" },
    track: { control: "boolean" },
    tooltip: { control: "boolean" },
    marks: { control: "boolean" },
    appearance: { control: { type: "select" } },
    variant: { control: { type: "select" } },
    size: { control: { type: "select" } },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    defaultValue: { control: "number" },
  },
} as Meta;

const Template: StoryFn = (args) => <Range {...args} style={{ gap: 12, width: "32rem" }}></Range>;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  appearance: "outline",
  variant: "base",
  min: 0,
  marks: false,
  max: 100,
  step: 1,
  track: true,
  defaultValue: 50,
  tooltip: true,
  size: "medium",
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
    <VerticalLayout style={{ gap: 8, width: "32rem" }}>
      {variants.map((key) => (
        <Range key={key.id} variant={key.variant} size="medium" defaultValue={25}></Range>
      ))}
    </VerticalLayout>
  );
};

export const Appearances = () => {
  const appearances: any[] = [
    { id: 1, name: "filled" },
    { id: 2, name: "outline" },
  ];
  return (
    <VerticalLayout style={{ gap: 8, width: "32rem" }}>
      {appearances.map((key) => (
        <Range key={key.id} appearance={key.name} size="medium" defaultValue={25}></Range>
      ))}
    </VerticalLayout>
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
      {sizes.map((key) => (
        <Range key={key.id} size={key.size} defaultValue={25}></Range>
      ))}
    </VerticalLayout>
  );
};

export const WithAdjustedSteps = () => {
  return (
    <VerticalLayout style={{ gap: 8, width: "32rem" }}>
      <Range size="medium" tooltip step={5} defaultValue={25}></Range>
    </VerticalLayout>
  );
};

export const WithMarks = () => {
  return (
    <VerticalLayout style={{ gap: 8, width: "32rem" }}>
      <Range size="medium" marks tooltip step={10} defaultValue={20}></Range>
    </VerticalLayout>
  );
};
WithMarks.parameters = {
  docs: {
    description: {
      story: "Works only up to 30 marks",
    },
  },
};

export const WithTooltip = () => {
  return (
    <VerticalLayout style={{ gap: 8, width: "32rem" }}>
      <Range size="medium" tooltip defaultValue={25}></Range>
    </VerticalLayout>
  );
};

export const TrackOnOrOff = () => {
  return (
    <VerticalLayout style={{ gap: 8, width: "32rem" }}>
      <Range size="medium" track defaultValue={25}></Range>
      <Range size="medium" track={false} defaultValue={25}></Range>
    </VerticalLayout>
  );
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  defaultValue: 25,
};
