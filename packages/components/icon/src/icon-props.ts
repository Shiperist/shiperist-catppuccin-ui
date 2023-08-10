import { Size, ColorSet } from "@shiperist-catppuccin-ui/utilities";
import { ReactNode } from "react";

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Sets the size of the icon.
   */
  size?: Size;

  /**
   * Sets the color of the icon.
   */
  color?: ColorSet;

  /**
   * Sets the icon to be displayed.
   * This can be any valid React node representing an SVG icon or a custom icon component.
   */
  icon?: ReactNode;
}
