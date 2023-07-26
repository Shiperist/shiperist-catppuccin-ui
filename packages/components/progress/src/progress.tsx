import { ColorSet, Size, cn } from "@shiperist-catppuccin-ui/utilities";
import React, { HTMLAttributes } from "react";
import { PositionHorizontal, Positions, Radius } from "@shiperist-catppuccin-ui/utilities";

// Todo radial progress

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  size?: Size;
  progress?: number;
  color?: ColorSet;
  radius?: Radius;
  showPercent?: boolean;
  percentPosition?: "inside" | "outside";
  percentPositionOutside?: PositionHorizontal;
  percentPositionInside?: Positions;
  /* variant?: "linear" | "radial"; */
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>((props, ref) => {
  const {
    size,
    color,
    showPercent,
    percentPosition,
    percentPositionInside,
    percentPositionOutside,
    /* variant = "", */
    className = "",
    radius,
    progress = 0,
    ...other
  } = props;

  const clampedProgress = Math.min(100, Math.max(0, progress)).toFixed(2);

  const radiusClass = {
    full: "rounded-full",
    none: "rounded-none",
  }[radius];

  const textSizeClass = {
    small: "text-xs",
    medium: "text-sm",
    large: "text-sm",
    xlarge: "text-md",
  }[size];

  const heightClass =
    {
      small: 6,
      medium: 10,
      large: 14,
      xlarge: 18,
    }[size] || "";

  const progressStyles = {
    width: `${clampedProgress}%`,
    ...other.style,
  };

  const progressContainerStyle = {
    height: heightClass,
    gap: showPercent ? 8 : undefined,
  };

  const labelStyles =
    percentPosition === "inside"
      ? {
          justifyContent: percentPositionInside,
          alignItems: percentPositionInside,
          display: "flex",
        }
      : { alignItems: "center", display: "flex" };
  return (
    <div
      ref={ref}
      className={cn("flex flex-row items-center transition-all duration-150 w-full")}
      style={progressContainerStyle}
      {...other}>
      {showPercent && percentPosition === "outside" && percentPositionOutside === "left" && (
        <div>
          <span className={cn(textSizeClass)}>{clampedProgress}%</span>
        </div>
      )}
      <div
        className={cn("transition-all w-full duration-150 items-center bg-overlay0", className, radiusClass)}
        style={{ height: heightClass + "px" }}>
        <div
          className={cn(`transition-all h-full duration-150 bg-${color}`, radiusClass)}
          style={{ ...progressStyles }}>
          {showPercent && size === "xlarge" && percentPosition === "inside" && (
            <div className="px-2" style={labelStyles}>
              <span className={cn("text-mantle text-xs", `text-${percentPositionInside}`)}>{clampedProgress}%</span>
            </div>
          )}
        </div>
      </div>
      {showPercent && percentPosition === "outside" && percentPositionOutside === "right" && (
        <div>
          <span className={cn(textSizeClass)}>{clampedProgress}%</span>
        </div>
      )}
    </div>
  );
});

Progress.displayName = "Progress";

export default Progress;
