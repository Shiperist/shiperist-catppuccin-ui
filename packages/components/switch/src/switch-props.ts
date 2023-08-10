import { ColorVariants } from "@shiperist-catppuccin-ui/utilities";
import { InputHTMLAttributes, ChangeEvent } from "react";

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "size"> {
  /**
   * Specifies whether the switch is disabled. When set to true, the switch becomes non-interactive
   * and its functionality is not available to users.
   */
  disabled?: boolean;

  /**
   * Sets the appearance style of the switch.
   * Possible values:
   * - "filled": A switch with a solid fill color representing the "on" state.
   * - "alternative": A switch with an alternative fill color for the "on" state.
   */
  appearance?: "filled" | "alternative";

  /**
   * Sets the size of the switch.
   * Possible values:
   * - "small": A small-sized switch.
   * - "medium": A medium-sized switch (default size).
   * - "large": A large-sized switch.
   */
  size?: "small" | "medium" | "large";

  /**
   * Specifies whether the switch is in the "on" state (checked).
   * When set to true, the switch will be visually represented as "on".
   */
  checked?: boolean;

  /**
   * Sets the color variant of the switch.
   */
  variant?: ColorVariants;

  /**
   * Sets the value of the switch. This value represents the value submitted when the switch is in the "on" state.
   */
  value?: string;

  /**
   * The event handler for when the switch's state changes.
   * It takes two arguments: the event object and a boolean indicating whether the switch is in the "on" state (checked).
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}
