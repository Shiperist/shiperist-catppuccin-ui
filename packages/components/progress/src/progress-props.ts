import { Size, ColorVariants, Positions, Boundary } from "@shiperist-catppuccin-ui/utilities";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Sets the thickness of the progress component.
   * @default medium
   */
  thickness?: Size;

  /**
   * Sets the progress value as a percentage (0 to 100).
   * @default 0
   */
  progress?: number;

  /**
   * Sets the color variant of the progress component.
   * @default base
   */
  variant?: ColorVariants;

  /**
   * Sets the shape of the progress component.
   * Possible values:
   * - "circular": A circular-shaped progress component.
   * - "square": A square-shaped progress component (default shape).
   * @default circular
   */
  shape?: "circular" | "square";

  /**
   * Specifies whether to show the percentage progress.
   * When set to true, the progress component will display the percentage of completion.
   * @default false
   */
  showPercent?: boolean;

  /**
   * Sets the position of the percentage display in relation to the progress bar.
   * @default left
   */
  percentPosition?: Positions;

  /**
   * Sets the position of the percentage display within the progress component.
   * Possible values:
   * - "inside": The percentage is displayed inside the progress bar (default position).
   * - "outside": The percentage is displayed outside the progress bar.
   * @default outside
   */
  percentBoundary?: Boundary;

  /**
   * Note: The "appearance" prop is commented out in the provided code snippet.
   * It would typically determine the appearance style of the progress component
   * and could have possible values like "linear" or "radial".
   */
  // appearance?: "linear" | "radial";
}
