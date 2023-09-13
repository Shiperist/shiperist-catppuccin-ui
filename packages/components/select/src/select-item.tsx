import React from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";
import { SelectItemProps, selectItemClass } from ".";

export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>((props, ref) => {
  const { leadingElement, trailingElement, size, disabled, className = "", value, children, ...other } = props;

  const selectItemStyles = cn(selectItemClass(disabled, size), className);

  return (
    <div ref={ref} className={selectItemStyles} {...other}>
      {leadingElement && <div className={cn("stroke-overlay1 pr-2")}>{leadingElement}</div>}
      <div className="flex-grow" style={{ marginLeft: leadingElement ? "0.2rem" : 0 }}>
        {children}
      </div>
      {trailingElement && <div className={cn("stroke-overlay1 pr-2")}>{trailingElement}</div>}
    </div>
  );
});

SelectItem.displayName = "SelectItem";
