import { PositionHorizontal, PositionVertical } from "@shiperist-catppuccin-ui/utilities";
import { ReactNode } from "react";

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The position of the tooltip relative to the target element.
   * @default top
   */
  position?: PositionVertical | PositionHorizontal;

  /**
   * The content to display within the tooltip.
   */
  text: ReactNode;

  /**
   * The delay in milliseconds before the tooltip is shown.
   * @default 250
   */
  showDelay?: number;

  /**
   * The delay in milliseconds before the tooltip is hidden after mouse leave.
   * @default 250
   */
  hideDelay?: number;

  /**
   * If `true`, the tooltip will be always visible.
   * @default false
   */
  visible?: boolean;
}
