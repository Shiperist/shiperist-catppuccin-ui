import { HTMLAttributes } from "react";

export interface KbdProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Determines the size of the Kbd component.
   * @default medium
   */
  size?: "small" | "medium" | "large";

  /**
   * Determines the appearance style of the Kbd component.
   * @default filled
   */
  appearance?: "filled" | "ghost" | "outline";
}
