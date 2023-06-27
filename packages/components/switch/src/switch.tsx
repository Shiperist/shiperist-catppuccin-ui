import React from "react";

export type SwitchVariant = "rounded" | "square";

export const SwitchVariants: SwitchVariant[] = ["rounded", "square"];

export interface SwitchProps extends React.HTMLAttributes<HTMLLabelElement> {
  variant?: SwitchVariant;
  disabled?: boolean;
}

const Switch: React.FC<SwitchProps> = ({
  variant = "rounded",
  disabled = false,
  className = "",
  children,
  ...other
}) => {
  const variantClass = {
    rounded: "rounded-full",
    square: "rounded-none",
  }[variant];

  const disabledClass = disabled ? "cursor-not-allowed pointer-events-none opacity-75" : "";
  const baseSwitchClass = `w-11 h-6 bg-transparent peer-focus:outline-none ${variantClass} peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-ctp-text after:h-5 after:w-5 after:transition-all peer-checked:bg-ctp-crust`;
  const sliderClass = `after:${variantClass} ${className} ${baseSwitchClass}`;

  return (
    <label
      className={`relative inline-flex items-center cursor-pointer border border-ctp-text ${variantClass} ${disabledClass}`}
      {...other}>
      <input type="checkbox" value="" className={`sr-only peer ${disabledClass}`}></input>
      <div className={`${disabledClass} ${sliderClass}`}></div>
      {children}
    </label>
  );
};

export default Switch;

Switch.displayName = "Switch";
