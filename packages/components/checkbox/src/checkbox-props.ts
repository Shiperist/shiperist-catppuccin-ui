import { ColorVariants } from "@shiperist-catppuccin-ui/utilities";
import { InputHTMLAttributes, ChangeEvent } from "react";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "size"> {
  /**
   * Specifies whether the checkbox is disabled. When set to true, the checkbox becomes non-interactive
   * and its functionality is not available to users.
   * @default false
   */
  disabled?: boolean;

  /**
   * Sets the color variant of the checkbox.
   * @default base
   */
  variant?: ColorVariants;

  /**
   * Specifies whether the checkbox is required for form submission.
   * When set to true, the form containing the checkbox cannot be submitted unless it is checked.
   * @default false
   */
  required?: boolean;

  /**
   * Sets the value of the checkbox. This will be the value submitted when the checkbox is checked.
   * If not provided, the checkbox will use a default value of "on".
   */
  value?: string;

  /**
   * Specifies whether the checkbox is checked. When set to true, the checkbox will be in the checked state.
   * @default false
   */
  checked?: boolean;

  /**
   * Sets the size of the checkbox.
   * Possible values:
   * - "small": A small-sized checkbox.
   * - "medium": A medium-sized checkbox (default size).
   * - "large": A large-sized checkbox.
   * @default medium
   */
  size?: "small" | "medium" | "large";

  /**
   * The event handler for when the checkbox's state changes.
   * It takes two arguments: the event object and a boolean indicating whether the checkbox is checked.
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}
