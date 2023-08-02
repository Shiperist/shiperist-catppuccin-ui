import { Meta, StoryFn } from "@storybook/react";
import { Text, Card, HorizontalLayout, VerticalLayout } from "@shiperist-catppuccin-ui/react";

export default {
  title: "Components/Layout",
  component: VerticalLayout,
} as Meta;

export const Vertical_Layout = () => (
  <Card style={{ width: "32rem" }}>
    <VerticalLayout style={{ gap: 8 }}>
      <Card appearance="filled" className="w-full items-center justify-center">
        <Text>content</Text>
      </Card>
      <Card appearance="filled" className="w-full items-center justify-center">
        <Text>content</Text>
      </Card>
    </VerticalLayout>
  </Card>
);

export const Horizontal_Layout = () => (
  <Card style={{ width: "32rem" }}>
    <HorizontalLayout style={{ gap: 8 }}>
      <Card appearance="filled" className="w-full items-center justify-center">
        <Text>content</Text>
      </Card>
      <Card appearance="filled" className="w-full items-center justify-center">
        <Text>content</Text>
      </Card>
    </HorizontalLayout>
  </Card>
);
