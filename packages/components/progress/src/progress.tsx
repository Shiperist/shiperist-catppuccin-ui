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
    large: "rounded-3xl",
    medium: "rounded-xl",
    small: "rounded-lg",
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
    height: heightClass,
    width: `${clampedProgress}%`,
    ...other.style,
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
      className={cn("flex flex-row w-full h-full items-center transition-all duration-150", className)}
      style={showPercent ? { gap: 8 } : undefined}
      {...other}>
      {showPercent && percentPosition === "outside" && percentPositionOutside === "left" && (
        <div>
          <span className={cn(textSizeClass)}>{clampedProgress}%</span>
        </div>
      )}
      <div className={cn("w-full transition-all duration-150 items-center bg-overlay0", radiusClass)}>
        <div className={cn(`transition-all duration-150 bg-${color}`, radiusClass)} style={{ ...progressStyles }}>
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
