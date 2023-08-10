import { ColorVariants } from "@shiperist-catppuccin-ui/utilities";
import { ReactNode } from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Sets a leading element in the badge. Can be any valid React node.
   * This element will be positioned before the badge's content.
   */
  leadingElement?: ReactNode;

  /**
   * Sets a trailing element in the badge. Can be any valid React node.
   * This element will be positioned after the badge's content.
   */
  trailingElement?: ReactNode;

  /**
   * Sets the color variant of the badge.
   */
  variant?: ColorVariants;

  /**
   * Sets the appearance of the badge.
   * Possible values:
   * - "filled": A badge with a solid background color and styled text.
   * - "ghost": A badge with a transparent background and styled text.
   * - "tint": A badge with a colored background and styled text.
   * - "outline": A badge with a colored outline and transparent background.
   */
  appearance?: "filled" | "ghost" | "tint" | "outline";
}
