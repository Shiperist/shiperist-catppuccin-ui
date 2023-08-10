import React from "react";
import { cn, colorClass } from "@shiperist-catppuccin-ui/utilities";
import {
  ProgressProps,
  progressClass,
  progressContainerClass,
  progressLabelStyles,
  progressMainBarClass,
  progressTextSizeClass,
} from ".";

// Todo radial progresss

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>((props, ref) => {
  const {
    thickness = "medium",
    variant = "success",
    showPercent,
    percentPosition,
    percentBoundary,
    /* appearance = "", */
    className = "",
    shape = "circular",
    progress = 0,
    ...other
  } = props;

  const clampedProgress = Math.min(100, Math.max(0, progress)).toFixed(2);
  const containerStyles = progressContainerClass(thickness);
  const mainOverlayStyles = cn(progressMainBarClass(shape, thickness), className);
  const progressLine = progressClass(colorClass(variant), shape);
  const labelStyles = progressLabelStyles(percentBoundary, percentPosition);

  const progressStyles = {
    width: `${clampedProgress}%`,
    ...other.style,
  };

  const percentText = (
    <div>
      <span className={cn(progressTextSizeClass[thickness] || progressTextSizeClass.medium)}>{clampedProgress}%</span>
    </div>
  );

  return (
    <div ref={ref} className={containerStyles} style={{ gap: showPercent ? 8 : undefined }} {...other}>
      {showPercent && percentBoundary === "outside" && percentPosition === "left" && percentText}
      <div className={mainOverlayStyles}>
        <div className={progressLine} style={{ ...progressStyles }}>
          {showPercent && thickness === "xlarge" && percentBoundary === "inside" && (
            <div className={cn("px-2")} style={labelStyles}>
              <span className={cn("text-mantle text-xs", `text-${percentPosition}`)}>{clampedProgress}%</span>
            </div>
          )}
        </div>
      </div>
      {showPercent && percentBoundary === "outside" && percentPosition === "right" && percentText}
    </div>
  );
});

Progress.displayName = "Progress";
