import React, {
  ChangeEvent,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";
import {
  CheckmarkIcon,
  ColorVariants,
  cn,
  colors,
} from "@shiperist-catppuccin-ui/utilities";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "size"> {
  disabled?: boolean;
  variant?: ColorVariants;
  required?: boolean;
  value?: string;
  checked?: boolean;
  size?: "small" | "medium" | "large";
  onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      disabled,
      variant,
      required,
      value,
      size,
      checked: controlledCheckbox,
      onChange,
      className = "",
      children,
      ...other
    } = props;

    const isControlled = controlledCheckbox !== undefined;
    const [isChecked, setIsChecked] = useState<boolean | undefined>(
      isControlled ? controlledCheckbox : false
    );
    const colorClass = colors[variant] || colors.base;

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
          "group relative inline-flex items-center",
          {
            "cursor-not-allowed opacity-50": disabled,
            "cursor-pointer": !disabled,
          },
          className
        )}
      >
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
        <div
          className={cn(
            `border-overlay0 bg-mantle border transition-all peer-checked:border`,
            `peer-checked:bg-${colorClass} peer-checked:border-${colorClass}`,
            { "group-hover:border-overlay2": !disabled },
            sizeClass
          )}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isChecked && (
            <CheckmarkIcon
              className={cn(`stroke-surface1 h-4 w-4 transition-all delay-200`)}
            />
          )}
        </div>
        {children}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
