import { PositionHorizontal, PositionVertical } from "@shiperist-catppuccin-ui/utilities";
import { ReactNode } from "react";

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The position of the tooltip relative to the target element.
   */
  position?: PositionVertical | PositionHorizontal;

  /**
   * The content to display within the tooltip.
   */
  text: ReactNode;

  /**
   * The delay in milliseconds before the tooltip is shown.
   */
  showDelay?: number;

  /**
   * The delay in milliseconds before the tooltip is hidden after mouse leave.
   */
  hideDelay?: number;

  /**
   * If `true`, the tooltip will be always visible.
   */
  visible?: boolean;
}
