import { ColorVariants, Orientation } from "@shiperist-catppuccin-ui/utilities";
import { HTMLAttributes, ReactNode } from "react";

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The orientation of the tabs.
   * Possible values:
   * - "horizontal": Tabs are arranged horizontally.
   * - "vertical": Tabs are arranged vertically.
   * @default horizontal
   */
  orientation?: Orientation;

  /**
   * The visual appearance style of the tabs.
   * Possible values:
   * - "default": Default appearance.
   * - "underline": Tabs have an underline effect.
   * - "boxed": Tabs are boxed.
   * - "lifted": Tabs have a lifted effect.
   * @default underline
   */
  appearance?: "default" | "underline" | "boxed" | "lifted";

  /**
   * The size of the tabs.
   * Possible values:
   * - "small": Small-sized tabs.
   * - "medium": Medium-sized tabs.
   * - "large": Large-sized tabs.
   * @default medium
   */
  size?: "small" | "medium" | "large";
}

export interface TabProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The orientation of the tab content.
   * Possible values:
   * - "horizontal": Tab content is oriented horizontally.
   * - "vertical": Tab content is oriented vertically.
   * @default horizontal
   */
  orientation?: Orientation;

  /**
   * The visual appearance style of the tab.
   * Possible values:
   * - "default": Default appearance.
   * - "underline": Tab has an underline effect.
   * - "boxed": Tab is boxed.
   * - "lifted": Tab has a lifted effect.
   * @default underline
   */
  appearance?: "default" | "underline" | "boxed" | "lifted";

  /**
   * The size of the tab.
   * Possible values:
   * - "small": Small-sized tab.
   * - "medium": Medium-sized tab.
   * - "large": Large-sized tab.
   * @default medium
   */
  size?: "small" | "medium" | "large";

  /**
   * The color variant of the tab.
   * @default base
   */
  variant?: ColorVariants;

  /**
   * Indicates whether the tab is currently active (selected) or not.
   */
  active?: boolean;

  /**
   * Element to be positioned before the tab content.
   */
  leadingElement?: ReactNode;

  /**
   * Element to be positioned after the tab content.
   */
  trailingElement?: ReactNode;
}
