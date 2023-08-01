import { ColorVariants, Size, cn } from "@shiperist-catppuccin-ui/utilities";
import React, { HTMLAttributes } from "react";
import { PositionHorizontal, Positions, colors } from "@shiperist-catppuccin-ui/utilities";

// Todo radial progress

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  size?: Size;
  progress?: number;
  variant?: ColorVariants;
  radius?: "full" | "none";
  showPercent?: boolean;
  percentPosition?: "inside" | "outside";
  percentPositionOutside?: PositionHorizontal;
  percentPositionInside?: Positions;
  /* appearance?: "linear" | "radial"; */
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>((props, ref) => {
  const {
    size,
    variant,
    showPercent,
    percentPosition,
    percentPositionInside,
    percentPositionOutside,
    /* appearance = "", */
    className = "",
    radius,
    progress = 0,
    ...other
  } = props;

  const clampedProgress = Math.min(100, Math.max(0, progress)).toFixed(2);
  const colorClass = colors[variant] || colors.success;
  const radiusClass = `rounded-${radius}`;
  const textSizeClass =
    {
      small: "text-xs",
      medium: "text-sm",
      large: "text-sm",
      xlarge: "text-md",
    }[size] || "";

  const heightClass =
    {
      small: "h-1.5",
      medium: "h-2.5",
      large: "h-3.5",
      xlarge: "h-4",
    }[size] || "h-2.5";

  const progressStyles = {
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
      className={cn("flex flex-row items-center transition-all duration-150 w-full", heightClass)}
      style={{ gap: showPercent ? 8 : undefined }}
      {...other}>
      {showPercent && percentPosition === "outside" && percentPositionOutside === "left" && (
        <div>
          <span className={cn(textSizeClass)}>{clampedProgress}%</span>
        </div>
      )}
      <div
        className={cn(
          "transition-all w-full duration-150 items-center bg-overlay0",
          className,
          radiusClass,
          heightClass
        )}>
        <div
          className={cn(`transition-all h-full duration-150 bg-${colorClass}`, radiusClass)}
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
