import React, { HTMLAttributes, ReactNode } from "react";
import {
  ColorVariants,
  cn,
  colors,
  getRGBAFromHex,
} from "@shiperist-catppuccin-ui/utilities";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: ColorVariants;
  leadingElement?: ReactNode;
  trailingElement?: ReactNode;
  size?: "small" | "medium" | "large";
  appearance?: "outline" | "filled" | "tint";
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    variant,
    leadingElement,
    trailingElement,
    appearance,
    size,
    className = "",
    children,
    style,
    ...other
  } = props;
  const colorClass = colors[variant] || colors.base;
  const sizeClass = {
    small: "text-sm h-8",
    medium: "text-md h-10",
    large: "text-lg h-12",
  }[size];

  const appearanceClass =
    {
      outline: `text-${colorClass} border border-${colorClass}`,
      filled: `text-surface0 border border-transparent bg-${colorClass}`,
      tint: `text-${colorClass} border border-transparent`,
    }[appearance] || `border border-${colors.base} text-${colors.base}`;
  const iconColor =
    appearance === "filled" ? "stroke-base" : `stroke-${colorClass}`;
  const backgroundColor =
    appearance === "tint" ? getRGBAFromHex(colorClass) : undefined;

  return (
    <div
      ref={ref}
      className={cn(
        `flex flex-row items-center rounded-xl pl-4 pr-2 transition-all`,
        appearanceClass,
        sizeClass,
        className
      )}
      style={{
        backgroundColor,
        ...props.style,
      }}
      {...other}
    >
      {leadingElement && <div className={cn(iconColor)}>{leadingElement}</div>}
      {children && <div className={`w-full`}>{children}</div>}
      {trailingElement && (
        <div className={cn(iconColor)}>{trailingElement}</div>
      )}
    </div>
  );
});

Alert.displayName = "Alert";

export default Alert;
