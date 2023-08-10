import React, { ChangeEvent, useEffect, useState } from "react";
import { CheckmarkIcon, cn, colorClass } from "@shiperist-catppuccin-ui/utilities";
import { CheckboxProps, checkboxBaseClass, checkboxBaseStyle, checkboxIconClass } from ".";

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    disabled,
    variant = "base",
    required,
    value,
    size = "medium",
    checked: controlledCheckbox,
    onChange,
    className = "",
    children,
    ...other
  } = props;

  const isControlled = controlledCheckbox !== undefined;
  const [isChecked, setIsChecked] = useState<boolean | undefined>(isControlled ? controlledCheckbox : false);

  const containerStyles = cn(checkboxBaseClass(disabled), className);
  const visibleStyles = checkboxBaseStyle(colorClass(variant), disabled, size);
  const iconClass = checkboxIconClass(disabled);

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

  return (
    <label htmlFor={other.id} className={containerStyles}>
      <input
        ref={ref}
        checked={isChecked}
        required={required}
        onClick={() => setIsChecked(!isChecked)}
        onChange={handleChange}
        type="checkbox"
        value={value}
        disabled={disabled}
        className="peer sr-only"
        {...other}
      />
      <div className={visibleStyles}>{isChecked && <CheckmarkIcon className={iconClass} />}</div>
      {children}
    </label>
  );
});

Checkbox.displayName = "Checkbox";
