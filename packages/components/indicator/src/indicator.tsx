import React, { FC, CSSProperties } from "react";
import { cn, ColorVariants } from "@shiperist-catppuccin-ui/utilities";

export interface IndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "small" | "tiny" | "medium";
  position?: CSSPosition;
  color?: ColorVariants;
}

export type CSSPosition = {
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
};

const Indicator: FC<IndicatorProps> = ({
  position,
  color = "base",
  size = "small",
  className,
  children = "",
  ...props
}) => {
  const fontClass = {
    tiny: 8,
    small: 10,
    medium: 12,
  }[size];

  const sizeClass = {
    tiny: 8,
    small: 10,
    medium: 12,
  }[size];

  const variantColor =
    {
      success: "green",
      danger: "red",
      warning: "yellow",
      info: "blue",
      base: "overlay2",
    }[color] || "";

  const indicatorStyle: CSSProperties = {
    width: children ? "fit-content" : sizeClass,
    height: children ? "fit-content" : sizeClass,
    fontSize: fontClass,
    ...position,
    ...props.style,
  };

  return (
    <div className={cn(`bg-${variantColor} rounded-full`, { "px-2": children }, className)} style={indicatorStyle}>
      {String(children).length > 3 ? String(children).slice(0, 3) + "+" : String(children).slice(0, 3)}
    </div>
  );
};

Indicator.displayName = "Indicator";

export default Indicator;
