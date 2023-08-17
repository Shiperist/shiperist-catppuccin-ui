import React from "react";
import { SelectItemHeaderProps, selectItemHeaderClass } from ".";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export const SelectItemHeader = React.forwardRef<HTMLSpanElement, SelectItemHeaderProps>((props, ref) => {
  const { className = "", children, ...other } = props;
  return (
    <div className={cn(selectItemHeaderClass(), className)}>
      <span ref={ref} {...other}>
        {children}
      </span>
    </div>
  );
});

SelectItemHeader.displayName = "SelectItemHeader";
