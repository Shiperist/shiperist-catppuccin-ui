import React, { ChangeEvent, InputHTMLAttributes, useEffect, useState } from "react";
import { CheckmarkIcon, ColorVariants, cn, colors } from "@shiperist-catppuccin-ui/utilities";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  disabled?: boolean;
  variant?: ColorVariants;
  required?: boolean;
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    disabled,
    variant,
    required,
    checked: controlledCheckbox,
    onChange,
    className = "",
    children,
    ...other
  } = props;

  const isControlled = controlledCheckbox !== undefined;
  const [isChecked, setIsChecked] = useState<boolean | undefined>(isControlled ? controlledCheckbox : false);

  useEffect(() => {
    if (isControlled) {
      setIsChecked(controlledCheckbox);
    }
  }, [isControlled, controlledCheckbox]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newCheckedValue = !isChecked;
    setIsChecked(newCheckedValue);
    if (isControlled && onChange) {
      onChange(event, newCheckedValue);
    }
  };

  const strokeColor = {
    success: "surface1",
    danger: "white",
    warning: "surface1",
    info: "white",
    base: "white",
  }[variant];

  const getCheckedClasses = () => {
    const colorClass = colors[variant] || colors.base;
    return `peer-checked:bg-${colorClass} peer-checked:border-${colorClass}`;
  };

  return (
    <label
      htmlFor={other.id}
      className={cn(
        "relative inline-flex items-center",
        { "cursor-not-allowed opacity-50": disabled, "cursor-pointer": !disabled },
        className
      )}>
      <input
        ref={ref}
        checked={isChecked}
        required={required}
        onClick={() => setIsChecked(!isChecked)}
        onChange={handleChange}
        type="checkbox"
        value=""
        disabled={disabled}
        className="sr-only peer"
        {...other}
      />
      <div
        className={cn(`w-4 h-4 border bg-mantle transition-all peer-checked:border`, getCheckedClasses())}
        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        {isChecked && <CheckmarkIcon className={cn(`transition-all delay-200 w-4 h-4 stroke-${strokeColor}`)} />}
      </div>
      {children}
    </label>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;
