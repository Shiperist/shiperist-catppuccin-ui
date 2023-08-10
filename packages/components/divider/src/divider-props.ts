import { Orientation, Positions } from "@shiperist-catppuccin-ui/utilities";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Sets the orientation of the divider.
   */
  orientation?: Orientation;

  /**
   * Sets the position of the label in relation to the divider line.
   */
  labelPosition?: Positions;

  /**
   * Sets the thickness of the divider line.
   * Possible values:
   * - "tiny": A very thin divider line.
   * - "small": A thin divider line.
   * - "medium": A medium thickness divider line.
   */
  thickness?: "tiny" | "small" | "medium";
}
