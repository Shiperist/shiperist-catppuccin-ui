import { cn } from "@shiperist-catppuccin-ui/utilities";
import { CSSProperties, ReactNode } from "react";

export const indicatorStatusColor = {
  active: "bg-green",
  inactive: "bg-red",
  idle: "bg-yellow",
  info: "bg-blue",
  invisible: "bg-overlay2",
};
export const indicatorTextColor = {
  active: "text-overlay0",
  dnd: "text-white",
  idle: "text-overlay0",
  info: "text-white",
  invisible: "text-white",
};
export const indicatorFontClass = {
  tiny: 8,
  small: 10,
  medium: 12,
};
export const indicatorSizeClass = {
  tiny: "w-2 h-2",
  small: "w-2.5 h-2.5",
  medium: "w-3 h-3",
};
export const getIndicatorPositionStyleFromPreset = (positionPreset: string) => {
  // Predefined positions based on positionPreset
  const positionPresets = positionPreset
    ? {
        "top-left": { top: 0, left: 0 },
        "top-right": { top: 0, right: 0 },
        "top-center": {
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
        },
        "bottom-left": { bottom: 0, left: 0 },
        "bottom-right": { bottom: 0, right: 0 },
        "bottom-center": {
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
        },
        "middle-left": {
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
        },
        "middle-right": {
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
        },
        "middle-center": {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      }
    : {};

  return positionPresets[positionPreset] || {}; // Return the predefined position style, or an empty object if the preset is not valid
};
export const indicatorLabelInsideClass = (children: ReactNode, isLegend: boolean, size: string, status: string) =>
  cn(
    `absolute inline-flex rounded-full transition-all duration-150`,
    indicatorStatusColor[status] || indicatorStatusColor.active,
    indicatorTextColor[status] || indicatorTextColor.active,
    {
      "px-2": children,
      "h-fit w-fit": children && !isLegend,
      [indicatorSizeClass[size]]: children && isLegend,
    }
  );
export const indicatorLabelOutsideClass = (size: string, status: string) =>
  cn(
    `rounded-full transition-all duration-150 ease-in-out`,
    indicatorStatusColor[status] || indicatorStatusColor.active,
    indicatorSizeClass[size] || indicatorSizeClass.small
  );
export const indicatorLabelOutsideContainerClass = cn("flex flex-row items-center");
