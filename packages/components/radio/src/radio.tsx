import React, { ChangeEvent, InputHTMLAttributes, useCallback, useEffect, useState } from "react";
import { ColorVariants, cn, colors } from "@shiperist-catppuccin-ui/utilities";

export type ValueType = string | number;
export interface RadioProps<T = ValueType> extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "size"> {
  disabled?: boolean;
  variant?: ColorVariants;
  required?: boolean;
  value?: string;
  name?: string;
  size?: "small" | "medium" | "large";
  onChange?: (value: T | undefined, checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
}
// TODO: styling somehow when it is checked/selected/active
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

  //const colorClass = colors[variant] || colors.base;
  const sizeClass =
    {
      small: "w-3 h-3",
      medium: "w-4 h-4",
      large: "w-5 h-5",
    }[size] || "w-4 h-4";

  /*   const [checked, setChecked] = useState(typeof groupValue !== "undefined" ? groupValue === value : controlledRadio);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) {
        return;
      }

      setChecked(true);
      onGroupChange?.(value, true, event);
      onChange?.(value, true, event);
    },
    [disabled, onChange, onGroupChange, setChecked, value]
  ); */

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
        /*         checked={checked}
        onChange={handleChange} */
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
