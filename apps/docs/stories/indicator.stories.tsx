import { Meta, StoryFn } from "@storybook/react";
import { Avatar, Indicator, HorizontalLayout, Card, IndicatorLabel } from "@shiperist-catppuccin-ui/react";
import avatar from "../assets/avatar.png";

export default {
  title: "Components/Indicator",
  component: Indicator,
  argTypes: {
    isLegend: { control: "boolean", description: "Whether the indicator shows as legend (can be used in charts)." },
    position: { control: "object", description: "Determines the custom position of the indicator." },
    size: { control: { type: "select" }, description: "Determines the size of the indicator." },
    status: { control: { type: "select" }, description: "Determines the status color of the indicator." },
    positionPreset: { control: { type: "select" }, description: "Determines the position preset of the indicator." },
    children: {
      control: "text",
      description: "Determines the children of the indicator, IndicatorLabel component can be used directly.",
    },
  },
} as Meta;

const Template: StoryFn = (args) => {
  const people: any[] = [
    { id: 1, status: "active", pings: 8 },
    { id: 2, status: "idle", pings: "" },
    { id: 3, status: "inactive", pings: "" },
    { id: 4, status: "info", pings: 9999 },
    { id: 5, status: "invisible", pings: "" },
  ];
  return (
    <HorizontalLayout style={{ gap: 8 }}>
      {people.map((person) => (
        <Avatar image={avatar} shape="rounded" size="large" key={person.id}>
          <Indicator {...args} status={person.status}>
            {person.pings !== "" && <IndicatorLabel>{person.pings}</IndicatorLabel>}
          </Indicator>
        </Avatar>
      ))}
    </HorizontalLayout>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: "",
  size: "medium",
  status: "",
  isLegend: false,
  positionPreset: "top-right",
  position: {},
};

export const AsLegend = () => {
  const legends: any[] = [
    { id: 1, status: "active", text: "Active" },
    { id: 2, status: "idle", text: "Idle" },
    { id: 3, status: "inactive", text: "Inactive" },
    { id: 4, status: "info", text: "Info" },
    { id: 5, status: "invisible", text: "Invisible" },
  ];
  return (
    <HorizontalLayout className="" style={{ gap: 16 }}>
      {legends.map((legend) => (
        <Indicator key={legend.id} size="medium" status={legend.status} isLegend={true}>
          <IndicatorLabel>{legend.text}</IndicatorLabel>
        </Indicator>
      ))}
    </HorizontalLayout>
  );
};

export const PositionPresets = () => {
  const positions: any[] = [
    { id: 1, name: "Top left", preset: "top-left" },
    { id: 2, name: "Top center", preset: "top-center" },
    { id: 3, name: "Top right", preset: "top-right" },
    { id: 4, name: "Middle left", preset: "middle-left" },
    { id: 5, name: "Middle center", preset: "middle-center" },
    { id: 6, name: "Middle right", preset: "middle-right" },
    { id: 7, name: "Bottom left", preset: "bottom-left" },
    { id: 8, name: "Bottom center", preset: "bottom-center" },
    { id: 9, name: "Bottom right", preset: "bottom-right" },
  ];
  return (
    <Card appearance="filled" className="relative mx-auto inline-flex" style={{ width: "16rem", height: "16rem" }}>
      {positions.map((position) => (
        <Indicator key={position.id} status="info" size="small" positionPreset={position.preset}>
          <IndicatorLabel>{position.name}</IndicatorLabel>
        </Indicator>
      ))}
    </Card>
  );
};
