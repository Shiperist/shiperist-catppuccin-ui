import { Meta, StoryFn } from "@storybook/react";
import { Badge, HorizontalLayout, Icon, Indicator, Tab, Tabs, VerticalLayout } from "@shiperist-catppuccin-ui/react";
import { HeartIcon } from "@shiperist-catppuccin-ui/utilities";

export default {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    orientation: { control: { type: "select" }, description: "Determines the orientation of the tabs." },
    size: { control: { type: "select" }, description: "Determines the size of the tabs." },
    children: {
      control: "object",
      description: "Determines the tab components of the tabs, this means use Tab component to determine children",
    },
    appearance: { control: { type: "select" }, description: "Determines the tab appearance of the tabs" },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Tabs {...args}>
    <Tab>Tab 1</Tab>
    <Tab active>Tab 2</Tab>
    <Tab>Tab 3</Tab>
  </Tabs>
);
export const Default = Template.bind({});
Default.args = {
  children: {},
  size: "medium",
  orientation: "horizontal",
  appearance: "underline",
};

export const Sizes = () => {
  const variants: any[] = [
    { id: 1, size: "small" },
    { id: 2, size: "medium" },
    { id: 3, size: "large" },
  ];
  return (
    <VerticalLayout className="flex items-center justify-center" style={{ gap: 10 }}>
      {variants.map((variant) => (
        <Tabs key={variant.id} appearance="underline" size={variant.size}>
          <Tab>Tab 1</Tab>
          <Tab active>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </Tabs>
      ))}
    </VerticalLayout>
  );
};

export const Appearances = () => {
  const appearances: any[] = [
    { id: 1, appearance: "default" },
    { id: 2, appearance: "underline" },
    { id: 3, appearance: "boxed" },
    { id: 4, appearance: "lifted" },
  ];

  // Filter out the "lifted" appearance for the vertical orientation
  const filteredAppearances = appearances.filter((key) => key.appearance !== "lifted");

  return (
    <HorizontalLayout className="flex items-center justify-center" style={{ gap: 20 }}>
      <VerticalLayout className="flex items-center justify-center" style={{ gap: 10 }}>
        {appearances.map((key) => (
          <Tabs key={key.id} appearance={key.appearance}>
            <Tab>Tab 1</Tab>
            <Tab active variant={key.appearance === "boxed" ? "success" : undefined}>
              Tab 2
            </Tab>
            <Tab>Tab 3</Tab>
          </Tabs>
        ))}
      </VerticalLayout>
      <HorizontalLayout className="flex items-center justify-center" style={{ gap: 10 }}>
        {filteredAppearances.map((key) => (
          <Tabs orientation="vertical" key={key.id} appearance={key.appearance}>
            <Tab>Tab 1</Tab>
            <Tab active variant={key.appearance === "boxed" ? "success" : undefined}>
              Tab 2
            </Tab>
            <Tab>Tab 3</Tab>
          </Tabs>
        ))}
      </HorizontalLayout>
    </HorizontalLayout>
  );
};

export const Orientations = () => {
  return (
    <HorizontalLayout className="flex items-center justify-center" style={{ gap: 20 }}>
      <Tabs appearance="underline">
        <Tab>Tab 1</Tab>
        <Tab active>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tabs>
      <Tabs orientation="vertical" appearance="underline">
        <Tab>Tab 1</Tab>
        <Tab active>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tabs>
    </HorizontalLayout>
  );
};

export const WithAddons = () => {
  return (
    <HorizontalLayout className="flex items-center justify-center" style={{ gap: 20 }}>
      <Tabs appearance="underline">
        <Tab
          active
          trailingElement={
            <Badge variant="success" className="font-normal">
              New
            </Badge>
          }>
          Tab 1
        </Tab>
        <Tab trailingElement={<Indicator isLegend status="active" size="tiny"></Indicator>}>Tab 2</Tab>
        <Tab leadingElement={<Icon color="overlay2" size="small" icon={<HeartIcon></HeartIcon>}></Icon>}>Tab 3</Tab>
      </Tabs>
      <Tabs orientation="vertical" appearance="underline">
        <Tab
          active
          trailingElement={
            <Badge variant="success" className="font-normal">
              New
            </Badge>
          }>
          Tab 1
        </Tab>
        <Tab trailingElement={<Indicator isLegend status="active" size="tiny"></Indicator>}>Tab 2</Tab>
        <Tab leadingElement={<Icon color="overlay2" size="small" icon={<HeartIcon></HeartIcon>}></Icon>}>Tab 3</Tab>
      </Tabs>
    </HorizontalLayout>
  );
};
