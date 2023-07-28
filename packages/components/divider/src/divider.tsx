import React from "react";
import { Orientation, Positions, cn } from "@shiperist-catppuccin-ui/utilities";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: Orientation;
  labelPosition?: Positions;
  thickness?: "tiny" | "small" | "medium";
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const { thickness, labelPosition, orientation, className = "", children, ...other } = props;

  const horizontalThicknessClass =
    {
      tiny: "h-[1px]",
      small: "h-[2px]",
      medium: "h-[3px]",
    }[thickness] || "h-[1px]";

  const verticalThicknessClass =
    {
      tiny: "w-[1px]",
      small: "w-[2px]",
      medium: "w-[3px]",
    }[thickness] || "w-[1px]";

  const labelContainerStyles = {
    left: labelPosition === "center" ? "50%" : labelPosition === "right" ? "auto" : "32px",
    right: labelPosition === "right" ? "32px" : "auto",
    transform: labelPosition === "center" ? "translateX(-50%)" : undefined,
  };

  const dividerClasses = cn(
    "bg-overlay2 relative",
    orientation === "horizontal" ? horizontalThicknessClass + " my-1" : "",
    orientation === "vertical" ? verticalThicknessClass + " mx-1" : "w-full",
    className
  );

  return (
    <div ref={ref} className={cn(dividerClasses)} {...other}>
      <div
        className={cn("absolute items-center flex h-full", {
          "flex-start": labelPosition === "left" && orientation !== "vertical",
          "flex-end": labelPosition === "right" && orientation !== "vertical",
          center: labelPosition === "center",
        })}
        style={labelContainerStyles}>
        {
          <div className={cn("bg-base", { "py-2": orientation === "vertical", "px-2": orientation === "horizontal" })}>
            {children}
          </div>
        }
      </div>
    </div>
  );
});

export default Divider;

Divider.displayName = "Divider";
