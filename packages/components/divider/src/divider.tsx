import React, { FC } from "react";
import { Orientation, Positions, cn } from "@shiperist-catppuccin-ui/utilities";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: Orientation;
  label?: string;
  labelPosition?: Positions;
  thickness?: "tiny" | "small" | "medium";
}

const Divider: FC<DividerProps> = ({ label, thickness, labelPosition, orientation, className = "", ...props }) => {
  const thicknessClass = {
    tiny: "1px",
    small: "2px",
    medium: "3px",
  }[thickness];

  const dividerClasses = {
    height: orientation === "horizontal" ? thicknessClass : "100%",
    width: orientation === "vertical" ? thicknessClass : "100%",
    ...props.style,
  };

  const labelContainerStyles = {
    left: labelPosition === "center" ? "50%" : labelPosition === "right" ? "auto" : 32,
    right: labelPosition === "right" ? 32 : "auto",
    transform: labelPosition === "center" ? "translateX(-50%)" : undefined,
  };

  return (
    <div className={cn("bg-overlay2 relative", className)} style={dividerClasses} {...props}>
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
};

export default Divider;

Divider.displayName = "Divider";
