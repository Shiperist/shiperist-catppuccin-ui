import React from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";
import { MenuItemProps, menuItemClass } from ".";

export const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>((props, ref) => {
  const { leadingElement, trailingElement, size, disabled, className = "", value, children, ...other } = props;

  const menuItemStyles = cn(menuItemClass(disabled, size), className);

  return (
    <div ref={ref} className={menuItemStyles} {...other}>
      {leadingElement && <div className={cn("stroke-overlay1 pr-2")}>{leadingElement}</div>}
      <div className="flex-grow" style={{ marginLeft: leadingElement ? "0.2rem" : 0 }}>
        {children}
      </div>
      {trailingElement && <div className={cn("stroke-overlay1 pr-2")}>{trailingElement}</div>}
    </div>
  );
});

MenuItem.displayName = "MenuItem";
