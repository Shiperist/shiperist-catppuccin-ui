import { ColorVariants } from "@shiperist-catppuccin-ui/utilities";
import { InputHTMLAttributes } from "react";

export interface RangeProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /**
   * Specifies whether the range (slider) component is disabled.
   * When set to true, the range becomes non-interactive and its functionality is not available to users.
   * @default false
   */
  disabled?: boolean;

  /**
   * Sets the color variant of the range (slider) component.
   * @default base
   */
  variant?: ColorVariants;

  /**
   * Sets the appearance style of the range (slider) component.
   * Possible values:
   * - "filled": A range with a solid fill color representing the selected range.
   * - "outline": A range with a colored outline representing the selected range.
   * @default outline
   */
  appearance?: "filled" | "outline";

  /**
   * Specifies whether to show a tooltip when interacting with the range (slider) component.
   * The tooltip may display the current value of the range as the user moves the slider.
   */
  tooltip?: boolean;

  /**
   * Sets the default value of the range (slider) component.
   * This value represents the initial position of the slider thumb.
   */
  defaultValue?: number;

  /**
   * Specifies whether to display marks at specified intervals along the range (slider) component.
   * Marks can help users understand the possible values and provide visual cues.
   * @default false
   */
  marks?: boolean;

  /**
   * Sets the minimum value of the range (slider) component.
   * The slider thumb cannot be moved below this value.
   * @default 0
   */
  min?: number;

  /**
   * Sets the maximum value of the range (slider) component.
   * The slider thumb cannot be moved above this value.
   * @default 100
   */
  max?: number;

  /**
   * Sets the step interval for the range (slider) component.
   * The slider thumb will move in multiples of this value when adjusted.
   * @default 1
   */
  step?: number;

  /**
   * Specifies whether to display the track (the range between the minimum and maximum values).
   * When set to false, the track will not be displayed, and only the slider thumb will be visible.
   * @default true
   */
  track?: boolean;

  /**
   * Sets the size of the range (slider) component.
   * Possible values:
   * - "small": A small-sized range component.
   * - "medium": A medium-sized range component (default size).
   * - "large": A large-sized range component.
   * @default medium
   */
  size?: "small" | "medium" | "large";
}
