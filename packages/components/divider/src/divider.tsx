import React from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";
import { DividerProps, dividerContainerClass, dividerExtraLabelStyle, dividerLabelClass } from ".";

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const {
    thickness = "tiny",
    labelPosition = "center",
    orientation = "horizontal",
    className = "",
    children,
    ...other
  } = props;

  const containerStyles = cn(dividerContainerClass(orientation, thickness), className);
  const labelStyles = dividerLabelClass(labelPosition, orientation);

  return (
    <div ref={ref} className={containerStyles} {...other}>
      <div className={labelStyles}>
        {<div className={dividerExtraLabelStyle[orientation] || dividerExtraLabelStyle.horizontal}>{children}</div>}
      </div>
    </div>
  );
});

Divider.displayName = "Divider";
