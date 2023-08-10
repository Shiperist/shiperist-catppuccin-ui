import React, { ChangeEvent, useEffect, useState } from "react";
import { colorClass } from "@shiperist-catppuccin-ui/utilities";
import { SwitchProps, containerClass, switchClass } from ".";

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      disabled,
      variant = "base",
      size = "medium",
      value,
      checked: controlledSwitch,
      appearance = "alternative",
      onChange,
      className = "",
      children,
      ...other
    },
    ref
  ) => {
    const isControlled = controlledSwitch !== undefined;
    const [isChecked, setIsChecked] = useState<boolean | undefined>(isControlled ? controlledSwitch : false);
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

    return (
      <label htmlFor={other.id} className={containerClass(disabled)}>
        <input
          ref={ref}
          type="checkbox"
          value={value}
          onClick={() => setIsChecked(!isChecked)}
          onChange={handleChange}
          checked={isChecked}
          disabled={disabled}
          className="peer sr-only"
          {...other}
        />
        <div className={switchClass(size, appearance, colorClass(variant), disabled)}></div>
        {children}
      </label>
    );
  }
);

Switch.displayName = "Switch";
