import React, { ReactNode } from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export interface SelectItemProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  leadingElement?: ReactNode;
  disabled?: boolean;
  value?: string;
}

const SelectItem = React.forwardRef<HTMLButtonElement, SelectItemProps>(
  (props, ref) => {
    const {
      leadingElement,
      disabled,
      className = "",
      value,
      children,
      ...other
    } = props;

    return (
      <button
        ref={ref}
        className={cn(
          "bg-base border-overlay0 text-text flex w-full max-w-full items-center border-b px-4 py-2 text-left transition duration-150 ease-in-out",
          {
            "cursor-not-allowed opacity-50": disabled,
            "hover:bg-overlay1": !disabled,
          },
          className
        )}
        {...other}
      >
        {leadingElement && (
          <div className={cn("stroke-overlay1 pr-2")}>{leadingElement}</div>
        )}
        <div
          className="flex-grow"
          style={{ marginLeft: leadingElement ? "0.2rem" : 0 }}
        >
          {children}
        </div>
      </button>
    );
  }
);

SelectItem.displayName = "SelectItem";

export default SelectItem;
