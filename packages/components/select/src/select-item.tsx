import React, { FC, ReactNode } from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export interface SelectItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  leadingElement?: ReactNode;
  value?: string;
}

const SelectItem: FC<SelectItemProps> = ({ leadingElement, className = "", value = "", children, ...props }) => {
  return (
    <button
      className={cn(
        "w-full bg-transparent transition duration-150 border-b border-overlay0 ease-in-out hover:bg-overlay1 px-4 py-2 text-text max-w-full text-left flex items-center",
        className
      )}
      {...props}>
      {leadingElement && <div className={cn("stroke-overlay1 pr-2")}>{leadingElement}</div>}
      <div className="flex-grow" style={{ marginLeft: leadingElement ? "0.2rem" : 0 }}>
        {children}
      </div>
    </button>
  );
};

SelectItem.displayName = "SelectItem";

export default SelectItem;
