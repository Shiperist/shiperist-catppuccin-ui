import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { Select, SelectItem, VerticalLayout, Text } from "@shiperist-catppuccin-ui/react";
import { leadingElement } from "../utilities/icons";

export default {
  title: "Example/Select",
  component: Select,
  argTypes: {
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
    defaultValue: { control: "text" },
    value: { control: "text" },
    onChange: { control: "function" },
    variant: { control: { type: "select", options: ["button", "input"] } },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Select {...args}>
    <SelectItem leadingElement={leadingElement} id="item1">
      Select one
    </SelectItem>
    <SelectItem id="item2">Select two</SelectItem>
    <SelectItem leadingElement={leadingElement} id="item3">
      Select three
    </SelectItem>
  </Select>
);

export const UncontrolledSelection = Template.bind({});
UncontrolledSelection.args = {
  disabled: false,
  placeholder: "Select items...",
  defaultValue: "",
  variant: "button",
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
      <Select placeholder="Select items..." defaultValue={selectedPerson} onChange={setSelectedPerson}>
        {people.map((person) => (
          <SelectItem key={person.id} value={person.name} disabled={person.disabled}>
            {person.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: "Select items...",
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: "Select items...",
};

export const Types = () => {
  return (
    <VerticalLayout style={{ gap: 16 }}>
      <Text bold>Button</Text>
      <Select variant="button" placeholder="Select items...">
        <SelectItem leadingElement={leadingElement} id="item1">
          Select one
        </SelectItem>
        <SelectItem id="item2">Select two</SelectItem>
        <SelectItem leadingElement={leadingElement} id="item3">
          Select three
        </SelectItem>
      </Select>
      <Text bold>Input</Text>
      <Select variant="input" placeholder="Select/search items...">
        <SelectItem leadingElement={leadingElement} id="item1">
          Select one
        </SelectItem>
        <SelectItem id="item2">Select two</SelectItem>
        <SelectItem leadingElement={leadingElement} id="item3">
          Select three
        </SelectItem>
      </Select>
    </VerticalLayout>
  );
};
