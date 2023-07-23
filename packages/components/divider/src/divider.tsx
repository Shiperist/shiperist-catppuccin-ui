import React from "react";
import { Orientation, Positions, cn } from "@shiperist-catppuccin-ui/utilities";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: Orientation;
  label?: string;
  labelPosition?: Positions;
  thickness?: "tiny" | "small" | "medium";
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const { label, thickness, labelPosition, orientation, className = "", ...other } = props;

  const thicknessClass = {
    tiny: "1px",
    small: "2px",
    medium: "3px",
  }[thickness];

  const dividerClasses = {
    height: orientation === "horizontal" ? thicknessClass : "100%",
    width: orientation === "vertical" ? thicknessClass : "100%",
    ...other.style,
  };

  const labelContainerStyles = {
    left: labelPosition === "center" ? "50%" : labelPosition === "right" ? "auto" : 32,
    right: labelPosition === "right" ? 32 : "auto",
    transform: labelPosition === "center" ? "translateX(-50%)" : undefined,
  };

  return (
    <div ref={ref} className={cn("bg-overlay2 relative", className)} style={dividerClasses} {...other}>
      <div
        className={cn("absolute items-center flex h-full", {
          "flex-start": labelPosition === "left" && orientation !== "vertical",
          "flex-end": labelPosition === "right" && orientation !== "vertical",
          center: labelPosition === "center",
        })}
        style={labelContainerStyles}>
        <div className={cn("px-2 bg-base")}>{label}</div>
      </div>
    </div>
  );
});

export default Divider;

Divider.displayName = "Divider";
