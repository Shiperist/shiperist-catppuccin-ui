import { ReactNode } from "react";

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Specifies whether the select component is disabled.
   * When set to true, the select component becomes non-interactive and its functionality is not available to users.
   * @default false
   */
  disabled?: boolean;

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

  /**
   * Optional text to be displayed within the Menu component.
   */
  text?: string;

  /**
   * Specifies whether the menu should respond to hover events.
   * When set to true, the menu options will be triggered on hover.
   * @default false
   */
  onHover?: boolean;
}

export interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
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
   * Sets the size of the select.
   * Possible values:
   * - "small": A small-sized select.
   * - "medium": A medium-sized select (default size).
   * - "large": A large-sized select.
   * @default medium
   */
  size?: "small" | "medium" | "large";
}

export interface MenuTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
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
}

export interface MenuItemHeaderProps extends React.HTMLAttributes<HTMLSpanElement> {}
