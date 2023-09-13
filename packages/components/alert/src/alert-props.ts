import { ColorVariants } from "@shiperist-catppuccin-ui/utilities";
import { ReactNode } from "react";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Sets the color variant of the component.
   * @default base
   */
  variant?: ColorVariants;

  /**
   * Sets a leading element in the component. Can be any valid React node.
   * This element will be positioned before the content of the alert component.
   */
  leadingElement?: ReactNode;

  /**
   * Sets a trailing element in the component. Can be any valid React node.
   * This element will be positioned after the content of the alert component.
   */
  trailingElement?: ReactNode;

  /**
   * Sets the size of the component.
   * Possible values:
   * - "small": A small-sized alert component.
   * - "medium": A medium-sized alert component.
   * - "large": A large-sized alert component.
   * @default medium
   */
  size?: "small" | "medium" | "large";

  /**
   * Sets the appearance of the component.
   * Possible values:
   * - "outline": An alert component with a colored outline and transparent background.
   * - "filled": An alert component with a solid background color and styled text.
   * - "tint": An alert component with a colored background and styled text.
   * @default outline
   */
  appearance?: "outline" | "filled" /* | "tint"; */;
}
