import { ColorVariants, Orientation } from "@shiperist-catppuccin-ui/utilities";
import { InputHTMLAttributes } from "react";

export type ValueType = string | number;
export interface RadioProps<T extends string | number = string>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "size"> {
  /**
   * Specifies whether the radio button is disabled. When set to true, the radio button becomes non-interactive
   * and its functionality is not available to users.
   * @default false
   */
  disabled?: boolean;

  /**
   * Sets the color variant of the radio button.
   * @default base
   */
  variant?: ColorVariants;

  /**
   * Specifies whether the radio button is required for form submission.
   * When set to true, the form containing the radio button group cannot be submitted unless a radio button is selected.
   * @default base
   */
  required?: boolean;

  /**
   * Sets the value of the radio button. This value represents the selected value when the radio button is checked.
   * It can be of type string or number, as indicated by the generic type parameter `T`.
   */
  value?: T;

  /**
   * Sets the name of the radio button group to which this radio button belongs.
   * Radio buttons with the same name are mutually exclusive, and selecting one will uncheck others with the same name.
   */
  name?: string;

  /**
   * Sets the size of the radio button.
   * Possible values:
   * - "small": A small-sized radio button.
   * - "medium": A medium-sized radio button (default size).
   * - "large": A large-sized radio button.
   * @default medium
   */
  size?: "small" | "medium" | "large";

  /**
   * The event handler for when the radio button's state changes.
   * It takes three arguments: the value of the radio button, a boolean indicating whether the radio button is checked,
   * and the event object.
   */
  onChange?: (value: T, checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Sets the orientation of the radio button group. This can control how the radio buttons are laid out.
   * @default vertical
   */
  orientation?: Orientation;

  /**
   * Sets the name of the radio button group. All radio buttons within the group should have the same name.
   * Radio buttons with the same name are mutually exclusive, and selecting one will uncheck others with the same name.
   */
  name?: string;

  /**
   * Specifies whether the radio button group is disabled. When set to true, the radio buttons become non-interactive
   * and their functionality is not available to users.
   * @default false
   */
  disabled?: boolean;
}
