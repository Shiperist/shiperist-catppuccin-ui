import { ReactNode } from "react";

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /**
   * Sets the type of the input field.
   * Possible values:
   * - "text": A regular text input (default type).
   * - "password": An input for passwords, where characters are masked for security.
   * @default text
   */
  type?: "text" | "password";

  /**
   * Sets a leading element in the text input. Can be any valid React node.
   * This element will be positioned before the input's content.
   */
  leadingElement?: ReactNode;

  /**
   * Sets a trailing element in the text input. Can be any valid React node.
   * This element will be positioned after the input's content.
   */
  trailingElement?: ReactNode;

  /**
   * Sets the size of the text input.
   * Possible values:
   * - "small": A small-sized text input.
   * - "medium": A medium-sized text input (default size).
   * - "large": A large-sized text input.
   * @default medium
   */
  size?: "small" | "medium" | "large";

  /**
   * Specifies whether the text input is in a loading state.
   * When set to true, a loading indicator may be displayed within the input field.
   * @default false
   */
  isLoading?: boolean;

  /**
   * Specifies whether the text input is disabled. When set to true, the text input becomes non-interactive
   * and its functionality is not available to users.
   * @default false
   */
  disabled?: boolean;

  /**
   * Specifies whether the text input is required for form submission.
   * When set to true, the form containing the text input cannot be submitted unless it has a value.
   * @default false
   */
  required?: boolean;

  /**
   * Specifies whether the text input is in an error state.
   * When set to true, the input may have a visual indication of an error (e.g., red border).
   * @default false
   */
  error?: boolean;

  /**
   * Sets a caption to display below the text input.
   * The caption may be used to provide additional information or context to the input field.
   */
  caption?: string;

  /**
   * Sets a label for the text input.
   * The label may provide a description of the input field's purpose.
   */
  label?: string;

  /**
   * Specifies whether to show an error icon when the text input is in an error state.
   * When set to true, an error icon may be displayed alongside the input.
   * @default false
   */
  errorIcon?: boolean;

  /**
   * Sets the style of the label for the text input.
   * Possible values:
   * - "default": A default style label for the input.
   * - "border": A label with a border background.
   * @default default
   */
  labelStyle?: "default" | "border";

  /**
   * Sets the appearance style of the text input.
   * Possible values:
   * - "outline": An input with an outline border (default appearance).
   * - "underline": An input with an underline.
   * - "filled": An input with a solid fill color.
   * @default outline
   */
  appearance?: "outline" | "underline" | "filled";
}
