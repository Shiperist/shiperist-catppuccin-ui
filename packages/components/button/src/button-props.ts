import { ColorVariants, Size } from "@shiperist-catppuccin-ui/utilities";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Sets a leading element in the button. Can be any valid React node.
   * This element will be positioned before the button's text or content.
   */
  leadingElement?: ReactNode;

  /**
   * Sets a trailing element in the button. Can be any valid React node.
   * This element will be positioned after the button's text or content.
   */
  trailingElement?: ReactNode;

  /**
   * Specifies whether the button is in a loading state. If set to true,
   * the button may display a loading indicator, and interactions with it may be disabled during the loading process.
   * @default false
   */
  isLoading?: boolean;

  /**
   * Specifies whether the button is disabled. When set to true, the button becomes non-interactive
   * and its functionality is not available to users.
   * @default false
   */
  disabled?: boolean;

  /**
   * Sets the appearance style of the button.
   * Possible values:
   * - "ghost": A transparent background button with styled text.
   * - "tint": A button with a colored background and styled text.
   * - "outline": A button with a colored outline and transparent background.
   * - "shadow": A button with a shadow effect.
   * @default outline
   */
  appearance?: /* "filled" | */ "ghost" | /* "tint" | */ "outline" | "shadow";

  /**
   * Sets the color variant of the button.
   * @default base
   */
  variant?: ColorVariants;

  /**
   * Sets the size variant of the button.
   * @default medium
   */
  size?: Size;
  /**
   * Sets the shape of the button.
   * Possible values:
   * - "square": A square-shaped button.
   * - "rounded": A rounded-corner button.
   * - "circular": A circular-shaped button.
   * @default rounded
   */
  shape?: "rounded" | "circular" | "square";
}
