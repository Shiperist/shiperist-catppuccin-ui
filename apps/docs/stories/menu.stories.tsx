import { Meta, StoryFn } from "@storybook/react";
import { Menu, MenuItem, MenuItemHeader, VerticalLayout, Icon, Divider, Badge } from "@shiperist-catppuccin-ui/react";
import { ChevronDownIcon, HeartIcon } from "@shiperist-catppuccin-ui/utilities";

export default {
  title: "Components/Menu",
  component: Menu,
  argTypes: {
    disabled: { control: "boolean", description: "Whether the menu is disabled." },
    onHover: { control: "boolean", description: "Whether the menu is set to open when hovering." },
    text: { control: "text", description: "Determines the text of the menu." },
    size: { control: { type: "select" }, description: "Determines the size of the menu." },
  },
} as Meta;

const icon = <Icon icon={<HeartIcon />} size="small" />;
const chvrn = <Icon icon={<ChevronDownIcon />} size="small" />;
const Template: StoryFn = (args) => {
  return (
    <div className="flex h-96 items-center justify-center">
      <Menu {...args} style={{ width: "10rem" }}>
        <MenuItem id="item1">Menu one</MenuItem>
        <MenuItem id="item2">Menu two</MenuItem>
        <MenuItem id="item3">Menu three</MenuItem>
      </Menu>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  size: "medium",
  onHover: false,
  text: "Toggle menu",
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  ...Default.args,
  disabled: true,
};
export const HoverOpen = Template.bind({});
HoverOpen.args = {
  ...Default.args,
  onHover: true,
};

export const WithTitledMenuItem = () => {
  return (
    <div className="mt-8 flex h-96 justify-center">
      <Menu text="Toggle menu" style={{ width: "10rem" }}>
        <MenuItemHeader>Items</MenuItemHeader>
        <MenuItem id="item1">Menu one</MenuItem>
        <MenuItem id="item2" disabled>
          Menu two
        </MenuItem>
        <MenuItem id="item3">Menu three</MenuItem>
        <Divider className="mb-3" />
        <MenuItemHeader>Cars</MenuItemHeader>
        <MenuItem id="item4" trailingElement={<Badge variant="success">New</Badge>}>
          Audi
        </MenuItem>
        <MenuItem id="item5">Mercedes-Benz</MenuItem>
        <MenuItem id="item6">BMW</MenuItem>
      </Menu>
    </div>
  );
};

export const WithIcons = () => {
  return (
    <div className="flex h-96 items-center justify-center">
      <Menu text="Toggle menu" style={{ width: "10rem" }} trailingElement={chvrn}>
        <MenuItem leadingElement={icon} id="item2">
          Menu one
        </MenuItem>
        <MenuItem trailingElement={icon} id="item3">
          Menu two
        </MenuItem>
        <MenuItem leadingElement={icon} trailingElement={icon} id="item4">
          Menu three
        </MenuItem>
      </Menu>
    </div>
  );
};

export const Sizes = () => {
  const sizes: any[] = [
    { id: 1, size: "small" },
    { id: 2, size: "medium" },
    { id: 3, size: "large" },
  ];

  return (
    <div className="flex h-96 items-center justify-center">
      <VerticalLayout style={{ gap: 8 }}>
        {sizes.map((key) => (
          <Menu text="Toggle menu" key={key.id} size={key.size} style={{ width: "10rem" }}>
            <MenuItem id="item1">Menu one</MenuItem>
            <MenuItem id="item2">Menu two</MenuItem>
            <MenuItem id="item3">Menu three</MenuItem>
          </Menu>
        ))}
      </VerticalLayout>
    </div>
  );
};
