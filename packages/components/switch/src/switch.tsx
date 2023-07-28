import React, { FC } from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export interface SwitchProps extends React.HTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
}

const Switch: FC<SwitchProps> = ({ disabled, className = "", children, ...props }) => {
  const switchClass = {
    base: "w-11 h-6 bg-mantle rounded-full",
    checked: "peer-checked:bg-green peer-checked:after:translate-x-full",
    after:
      "after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all",
  };

  return (
    <label
      htmlFor={props.id}
      className={cn(
        "relative inline-flex items-center",
        { "cursor-not-allowed opacity-50": disabled, "cursor-pointer": !disabled },
        className
      )}>
      <input type="checkbox" value="" disabled={disabled} className="sr-only peer" {...props} />
      <div className={`${switchClass.base} ${switchClass.checked} ${switchClass.after}`}></div>
      {children}
    </label>
  );
};

export default Switch;

Switch.displayName = "Switch";
