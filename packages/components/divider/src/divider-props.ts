import { Orientation, Positions } from "@shiperist-catppuccin-ui/utilities";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Sets the orientation of the divider.
   * @default horizontal
   */
  orientation?: Orientation;

  /**
   * Sets the position of the label in relation to the divider line.
   * @default center
   */
  labelPosition?: Positions;

  /**
   * Sets the thickness of the divider line.
   * Possible values:
   * - "tiny": A very thin divider line.
   * - "small": A thin divider line.
   * - "medium": A medium thickness divider line.
   * @default tiny
   */
  thickness?: "tiny" | "small" | "medium";
}
