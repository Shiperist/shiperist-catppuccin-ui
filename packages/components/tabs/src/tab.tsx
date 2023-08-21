import React from "react";
import { TabProps, tabContainerClass } from ".";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export const Tab = React.forwardRef<HTMLDivElement, TabProps>((props, ref) => {
  const {
    className = "",
    children,
    appearance = "underline",
    leadingElement,
    trailingElement,
    size = "medium",
    active,
    orientation = "horizontal",
    variant = "base",
    ...other
  } = props;
  const containerClass = tabContainerClass(size, appearance, active, variant, orientation);
  return (
    <div ref={ref} className={cn(containerClass, className)} {...other}>
      {leadingElement && <div>{leadingElement}</div>}
      {children && <div className="mx-1">{children}</div>}
      {trailingElement && <div>{trailingElement}</div>}
    </div>
  );
});

Tab.displayName = "Tab";
