import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { Select, SelectItem, VerticalLayout, Text, Icon } from "@shiperist-catppuccin-ui/react";
import { HeartIcon } from "@shiperist-catppuccin-ui/utilities";

export default {
  title: "Forms/Select",
  component: Select,
  argTypes: {
    disabled: { control: "boolean", description: "Whether the select is disabled." },
    placeholder: { control: "text", description: "Determines the placeholder of the select." },
    defaultValue: { control: "text", description: "Determines the default value of the select." },
    value: { control: "text", description: "Determines the value of the select." },
    onChange: { control: "function", description: "Callback function triggered when the value of the select changes." },
    variant: { control: { type: "select" }, description: "Determines the color variant of the select." },
    size: { control: { type: "select" }, description: "Determines the size of the select." },
  },
} as Meta;

const icon = <Icon icon={<HeartIcon />} size="small" />;
const Template: StoryFn = (args) => {
  return (
    <Select {...args} style={{ width: "32rem" }}>
      <SelectItem leadingElement={icon} id="item1">
        Select one
      </SelectItem>
      <SelectItem id="item2">Select two</SelectItem>
      <SelectItem leadingElement={icon} id="item3">
        Select three
      </SelectItem>
    </Select>
  );
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  placeholder: "Select items...",
  defaultValue: "",
  value: "",
  variant: "button",
  size: "medium",
};

export const ControlledSelection = () => {
  const people = [
    { id: 1, name: "Durward Reynolds", disabled: false },
    { id: 2, name: "Kenton Towne", disabled: false },
    { id: 3, name: "Therese Wunsch", disabled: false },
    { id: 4, name: "Benedict Kessler", disabled: true },
    { id: 5, name: "Katelyn Rohan", disabled: false },
  ];
  const [selectedPerson, setSelectedPerson] = useState(people[0].name);

  return (
    <div>
      <Select
        placeholder="Select items..."
        variant="button"
        defaultValue={selectedPerson}
        onChange={setSelectedPerson}
        style={{ width: "32rem" }}>
        {people.map((person) => (
          <SelectItem key={person.id} value={person.name} disabled={person.disabled}>
            {person.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  disabled: true,
  placeholder: "Select items...",
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: "Select items...",
  variant: "button",
};

export const Sizes = () => {
  const sizes: any[] = [
    { id: 1, size: "small" },
    { id: 2, size: "medium" },
    { id: 3, size: "large" },
  ];

  return (
    <VerticalLayout style={{ gap: 16 }}>
      {sizes.map((key) => (
        <Select key={key.id} size={key.size} placeholder="Select items..." variant="button" style={{ width: "32rem" }}>
          <SelectItem leadingElement={icon} id="item1">
            Select one
          </SelectItem>
          <SelectItem id="item2">Select two</SelectItem>
          <SelectItem leadingElement={icon} id="item3">
            Select three
          </SelectItem>
        </Select>
      ))}
    </VerticalLayout>
  );
};

export const Types = () => {
  return (
    <VerticalLayout style={{ gap: 16, width: "32rem" }}>
      <Text bold>Button</Text>
      <Select variant="button" placeholder="Select items...">
        <SelectItem leadingElement={icon} id="item1">
          Select one
        </SelectItem>
        <SelectItem id="item2">Select two</SelectItem>
        <SelectItem leadingElement={icon} id="item3">
          Select three
        </SelectItem>
      </Select>
      <Text bold>Input</Text>
      <Select variant="input" placeholder="Select/search items...">
        <SelectItem leadingElement={icon} id="item1">
          Select one
        </SelectItem>
        <SelectItem id="item2">Select two</SelectItem>
        <SelectItem leadingElement={icon} id="item3">
          Select three
        </SelectItem>
      </Select>
    </VerticalLayout>
  );
};
