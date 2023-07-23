import { Meta, StoryFn } from "@storybook/react";
import { Button, Card, HorizontalLayout, VerticalLayout } from "@shiperist-catppuccin-ui/react";
const data = Array.from({ length: 5 }, () => (
  <Button variant="base" size="small" appearance="outline">
    Button
  </Button>
));

export default {
  title: "Example/Layout",
  component: VerticalLayout,
} as Meta;

export const Vertical_Layout = () => (
  <Card appearance="outline" padding={"1rem"} gap={"1rem"}>
    <VerticalLayout style={{ gap: 8 }}>{data}</VerticalLayout>
  </Card>
);

export const Horizontal_Layout = () => (
  <Card appearance="outline" padding={"1rem"} gap={"1rem"}>
    <HorizontalLayout style={{ gap: 8 }}>{data}</HorizontalLayout>
  </Card>
);
