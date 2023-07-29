import React from "react";
import { ColorVariants, cn } from "@shiperist-catppuccin-ui/utilities";

export interface SwitchProps extends React.HTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  appearance?: `filled` | `alternative`;
  variant?: ColorVariants;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ disabled, variant, appearance, className = ``, children, ...other }, ref) => {
    const colors = {
      success: `green`,
      danger: `red`,
      warning: `yellow`,
      info: `blue`,
      base: `overlay2`,
    };
    const getCheckedClasses = () => {
      const colorClass = colors[variant] || colors.base;
      return appearance === "alternative"
        ? `peer-checked:border-${colorClass} peer-checked:after:bg-${colorClass}`
        : `peer-checked:bg-${colorClass}`;
    };

    return (
      <label
        htmlFor={other.id}
        className={cn(
          `relative inline-flex items-center`,
          { "cursor-not-allowed opacity-50": disabled, "cursor-pointer": !disabled },
          className
        )}>
        <input ref={ref} type="checkbox" value="" disabled={disabled} className="sr-only peer" {...other} />
        <div
          className={cn(
            `w-11 h-6 bg-mantle peer-checked:border rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:rounded-full after:h-5 after:w-5 after:transition-all after:duration-300`,
            getCheckedClasses(),
            { "after:bg-surface1": appearance === "alternative", "after:bg-white": appearance === "filled" }
          )}></div>
        {children}
      </label>
    );
  }
);

Switch.displayName = "Switch";

export default Switch;
