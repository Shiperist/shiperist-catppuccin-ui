import React, { ChangeEvent, InputHTMLAttributes, useCallback, useEffect, useState } from "react";
import { ColorVariants, cn, colors } from "@shiperist-catppuccin-ui/utilities";

//WIP custom styling

export type ValueType = string | number;
export interface RadioProps<T extends string | number = string>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "size"> {
  disabled?: boolean;
  variant?: ColorVariants;
  required?: boolean;
  value?: T;
  name?: string;
  size?: "small" | "medium" | "large";
  onChange?: (value: T, checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const {
    disabled,
    variant,
    required,
    name,
    size,
    checked,
    value,
    onChange,
    className = "",
    children,
    ...other
  } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    onChange && onChange(value as any, checked, event);
  };
  const sizeClass =
    {
      small: "w-3 h-3",
      medium: "w-4 h-4",
      large: "w-5 h-5",
    }[size] || "w-4 h-4";

  return (
    <label
      htmlFor={other.id}
      className={cn(
        "relative inline-flex items-center",
        { "cursor-not-allowed opacity-50": disabled, "cursor-pointer": !disabled },
        className
      )}>
      <input
        name={name}
        ref={ref}
        required={required}
        /*         checked={checked}*/
        onChange={handleChange}
        type="radio"
        value={value}
        disabled={disabled}
        className={cn(sizeClass, "transition-all")}
        {...other}
      />
      {/*       <span
        className={cn("border rounded-full relative", sizeClass, {
          [`bg-${colorClass}`]: checked,
          "border-overlay2": !checked,
        })}>
        {checked && (
          <span
            className="absolute inset-1/2 transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white"
            aria-hidden="true"></span>
        )}
      </span> */}
      {children}
    </label>
  );
});

Radio.displayName = "Radio";

export default Radio;
