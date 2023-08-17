import { CSSProperties, ReactNode } from "react";

export interface SelectProps {
  /**
   * Specifies whether the select component is disabled.
   * When set to true, the select component becomes non-interactive and its functionality is not available to users.
   * @default false
   */
  disabled?: boolean;

  /**
   * Sets the placeholder text to display when no option is selected.
   * The placeholder provides a hint to the user about the purpose of the select component.
   */
  placeholder?: string;

  /**
   * Sets the default value for the select component.
   * This value represents the initial selected option in the select dropdown.
   */
  defaultValue?: string;

  /**
   * Sets the variant style of the select component.
   * Possible values:
   * - "button": A select component with a button-like appearance.
   * - "input": A select component with an input-like appearance (default variant).
   * @default button
   */
  variant?: "button" | "input";

  /**
   * Sets the value of the selected option in the select component.
   * This value determines the currently selected option in the select dropdown.
   */
  value?: string;

  /**
   * The event handler for when the selected value in the select component changes.
   * It takes one argument: the value of the newly selected option in the select dropdown.
   */
  onChange?: (value: string) => void;

  /**
   * A CSS class name to apply custom styles to the select component.
   */
  className?: string;

  /**
   * A style object to apply custom styles to the select component.
   */
  style?: CSSProperties;

  /**
   * The child elements that represent the options in the select dropdown.
   * These child elements should be of type React.ReactElement.
   */
  children: React.ReactElement[] | React.ReactElement;

  /**
   * Sets the size of the select.
   * Possible values:
   * - "small": A small-sized select.
   * - "medium": A medium-sized select (default size).
   * - "large": A large-sized select.
   * @default medium
   */
  size?: "small" | "medium" | "large";
}

export interface SelectItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Sets a leading element in the option. Can be any valid React node.
   * This element will be positioned before the option's content.
   */
  leadingElement?: ReactNode;

  /**
   * Sets a trailing element in the option. Can be any valid React node.
   * This element will be positioned after the option's content.
   */
  trailingElement?: ReactNode;

  /**
   * Specifies whether the option is disabled. When set to true, the option becomes non-interactive
   * and its functionality is not available to users.
   * @default false
   */
  disabled?: boolean;

  /**
   * Sets the value of the option. This value represents the option's value when selected.
   */
  value?: string;

  /**
   * Specifies whether the option is shown as title. When set to true, the option becomes non-interactive
   * and its functionality is not available to users.
   * @default false
   */
  isTitle?: boolean;

  /**
   * Sets the size of the select.
   * Possible values:
   * - "small": A small-sized select.
   * - "medium": A medium-sized select (default size).
   * - "large": A large-sized select.
   * @default medium
   */
  size?: "small" | "medium" | "large";
}
