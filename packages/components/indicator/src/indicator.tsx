import React, { CSSProperties } from "react";
import { CSSPosition, PositionPresets, Status, cn } from "@shiperist-catppuccin-ui/utilities";

export interface IndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "small" | "tiny" | "medium";
  position?: CSSPosition;
  status?: Status;
  isLegend?: boolean;
  positionPreset?: PositionPresets;
}

const Indicator = React.forwardRef<HTMLDivElement, IndicatorProps>((props, ref) => {
  const { position, status, isLegend, positionPreset, size, className, children = "", ...other } = props;
  const fontClass =
    {
      tiny: 8,
      small: 10,
      medium: 12,
    }[size] || 0;

  const sizeClass =
    {
      tiny: 8,
      small: 10,
      medium: 12,
    }[size] || 12;
  const statusColor =
    {
      active: "green",
      inactive: "red",
      idle: "yellow",
      info: "blue",
      invisible: "overlay2",
    }[status] || "";
  const textColor =
    {
      active: "text-overlay0",
      dnd: "text-white",
      idle: "text-overlay0",
      info: "text-white",
      invisible: "text-white",
    }[status] || "";

  const colorClass = status ? `bg-${statusColor}` : "";
  const textClass = status ? `${textColor}` : "";

  const getPositionStyleFromPreset = () => {
    // Predefined positions based on positionPreset
    const positionPresets = positionPreset
      ? {
          "top-left": { top: 0, left: 0 },
          "top-right": { top: 0, right: 0 },
          "top-center": { top: 0, left: "50%", transform: "translateX(-50%)" },
          "bottom-left": { bottom: 0, left: 0 },
          "bottom-right": { bottom: 0, right: 0 },
          "bottom-center": { bottom: 0, left: "50%", transform: "translateX(-50%)" },
          "middle-left": { top: "50%", left: 0, transform: "translateY(-50%)" },
          "middle-right": { top: "50%", right: 0, transform: "translateY(-50%)" },
          "middle-center": { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
        }
      : {};

    return positionPresets[positionPreset] || {}; // Return the predefined position style, or an empty object if the preset is not valid
  };

  const positionStyleFromPreset = getPositionStyleFromPreset();

  const indicatorStyle: CSSProperties = {
    width: children && !isLegend ? "fit-content" : sizeClass,
    height: children && !isLegend ? "fit-content" : sizeClass,
    fontSize: children && !isLegend ? fontClass : undefined,
    ...positionStyleFromPreset,
    ...position,
    ...other.style,
  };

  return (
    <>
      {/* Indicator without text when isLegend is true */}
      {!isLegend && (
        <div
          ref={ref}
          className={cn(
            `absolute inline-flex rounded-full transition-all duration-150`,
            colorClass,
            textClass,
            { "px-2": children },
            className
          )}
          style={indicatorStyle}
          {...other}>
          {children}
        </div>
      )}

      {/* Label text outside the indicator */}
      {isLegend && (
        <div ref={ref} className={cn("flex flex-row items-center")} style={{ gap: 4 }}>
          <div
            className={cn(`rounded-full transition-all duration-150 ease-in-out`, colorClass, className)}
            {...other}
            style={indicatorStyle}></div>
          {children}
        </div>
      )}
    </>
  );
});

Indicator.displayName = "Indicator";

export default Indicator;
