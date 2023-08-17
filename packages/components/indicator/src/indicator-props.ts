import { CSSPosition, PositionPresets } from "@shiperist-catppuccin-ui/utilities";

export interface IndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Sets the size of the indicator.
   * Possible values:
   * - "small": A small-sized indicator.
   * - "tiny": A very small-sized indicator.
   * - "medium": A medium-sized indicator.
   * @default small
   */
  size?: "small" | "tiny" | "medium";

  /**
   * Sets the position of the indicator using CSS positioning.
   */
  position?: CSSPosition;

  /**
   * Sets the status of the indicator.
   * @default active
   */
  status?: "invisible" | "active" | "idle" | "dnd" | "info";

  /**
   * Specifies whether the indicator is part of a legend.
   * When set to true, the indicator may be used as a representation in a legend or key for visual cues.
   * @default false
   */
  isLegend?: boolean;

  /**
   * Sets the preset position for the indicator.
   * @default top-right
   */
  positionPreset?: PositionPresets;
}

export interface IndicatorLabelProps extends React.HTMLAttributes<HTMLSpanElement> {}
