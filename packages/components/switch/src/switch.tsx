import React, { ChangeEvent, InputHTMLAttributes, useEffect, useState } from "react";
import { ColorVariants, cn, colors } from "@shiperist-catppuccin-ui/utilities";

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "size"> {
  disabled?: boolean;
  appearance?: "filled" | "alternative";
  size?: "small" | "medium" | "large";
  checked?: boolean;
  variant?: ColorVariants;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      disabled,
      variant,
      size,
      value,
      checked: controlledSwitch,
      appearance,
      onChange,
      className = "",
      children,
      ...other
    },
    ref
  ) => {
    const colorClass = colors[variant] || colors.base;
    const isControlled = controlledSwitch !== undefined;
    const [isChecked, setIsChecked] = useState<boolean | undefined>(isControlled ? controlledSwitch : false);
    const sizeClass =
      {
        small: 4,
        medium: 5,
        large: 6,
      }[size] || 5;

    const widthOffset =
      {
        small: 3,
        medium: 4,
        large: 5,
      }[size] || 4;
    useEffect(() => {
      if (isControlled) {
        setIsChecked(controlledSwitch);
      }
    }, [isControlled, controlledSwitch]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newCheckedValue = !isChecked;
      setIsChecked(newCheckedValue);
      if (isControlled && onChange) {
        onChange(event, newCheckedValue);
      }
    };
    const widthClass = `w-${sizeClass + widthOffset}`;

    return (
      <label
        htmlFor={other.id}
        className={cn(
          `relative inline-flex items-center`,
          { "cursor-not-allowed opacity-50": disabled, "cursor-pointer": !disabled },
          className
        )}>
        <input
          ref={ref}
          type="checkbox"
          value={value}
          onClick={() => setIsChecked(!isChecked)}
          onChange={handleChange}
          checked={isChecked}
          disabled={disabled}
          className="sr-only peer"
          {...other}
        />
        <div
          className={cn(
            `bg-mantle peer-checked:border rounded-full peer-checked:after:translate-x-full after:content-[''] after:left-[1.5px] after:absolute after:top-1/2 after:-translate-y-1/2 after:rounded-full after:h-${
              sizeClass - 1
            } after:w-${sizeClass - 1} after:transition-all after:duration-300`,
            "h-" + sizeClass,
            widthClass,
            appearance === "alternative"
              ? `peer-checked:border-${colorClass} peer-checked:after:bg-${colorClass} after:items-center after:bg-overlay0`
              : `peer-checked:bg-${colorClass} after:bg-white`
          )}></div>
        {children}
      </label>
    );
  }
);

Switch.displayName = "Switch";

export default Switch;
