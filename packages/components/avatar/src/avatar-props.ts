import { ColorSet, Size } from "@shiperist-catppuccin-ui/utilities";
import { ReactNode } from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLImageElement> {
  /**
   * Sets the size of the avatar.
   */
  size?: Size;

  /**
   * Sets the image URL of the avatar.
   */
  image?: string;

  /**
   * Sets the alt text for the image.
   */
  alt?: string;

  /**
   * Sets the shape of the avatar.
   * Possible values:
   * - "square": A square-shaped avatar.
   * - "rounded": A rounded-corner avatar.
   * - "circular": A circular-shaped avatar.
   */
  shape?: "square" | "rounded" | "circular";

  /**
   * Sets a default image to use if the `image` prop is not provided.
   */
  defaultImage?: string;

  /**
   * Sets the background color of the avatar.
   */
  backgroundColor?: ColorSet;

  /**
   * Sets the loading state of the avatar. If set to true, the avatar may display a loading indicator.
   */
  isLoading?: boolean;

  /**
   * Sets an icon to display instead of an image.
   * This can be any valid React node representing an SVG icon or custom icon component.
   */
  icon?: ReactNode;

  /**
   * Sets any child nodes to render within the avatar component.
   * This can include additional content or elements that should appear inside the avatar.
   */
  children?: ReactNode;
}

export interface AvatarLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Sets the name to display in the avatar label.
   * This will typically represent the user's name or any other relevant label text.
   */
  name?: string;
}
