import React, { ChangeEvent } from "react";
import { cn, colorClass } from "@shiperist-catppuccin-ui/utilities";
import { RadioProps, radioClass, radioContainerClass } from ".";

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
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
  const radioStyles = cn(radioClass(disabled, colorClass(variant), size), className);
  const containerStyles = radioContainerClass(disabled);

  return (
    <label htmlFor={other.id} className={containerStyles}>
      <input
        name={name}
        ref={ref}
        required={required}
        checked={checked}
        onChange={handleChange}
        type="radio"
        value={value}
        disabled={disabled}
        className={radioStyles}
        {...other}
      />
      {children}
    </label>
  );
});

Radio.displayName = "Radio";
