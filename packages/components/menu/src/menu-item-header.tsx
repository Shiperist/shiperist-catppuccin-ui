import React from "react";
import { MenuItemHeaderProps, menuItemHeaderClass } from ".";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export const MenuItemHeader = React.forwardRef<HTMLSpanElement, MenuItemHeaderProps>((props, ref) => {
  const { className = "", children, ...other } = props;
  return (
    <div className={cn(menuItemHeaderClass(), className)}>
      <span ref={ref} {...other}>
        {children}
      </span>
    </div>
  );
});

MenuItemHeader.displayName = "MenuItemHeader";
