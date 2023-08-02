import React, { ReactNode } from "react";
import {
  cn,
  getRGBAFromHex,
  ColorVariants,
  colors,
} from "@shiperist-catppuccin-ui/utilities";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  leadingElement?: ReactNode;
  trailingElement?: ReactNode;
  variant?: ColorVariants;
  appearance?: "filled" | "ghost" | "tint" | "outline";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const {
    leadingElement,
    trailingElement,
    variant,
    appearance,
    className = "",
    children,
    ...other
  } = props;
  const colorClass = colors[variant] || colors.base;

  const appearanceClass =
    {
      filled: `bg-${colorClass} text-mantle border border-transparent`,
      outline: `border border-${colorClass} text-${colorClass}`,
      ghost: `text-${colorClass} border border-transparent`,
      tint: `text-${colorClass} border border-transparent`,
    }[appearance] || `bg-${colorClass} text-mantle border border-transparent`;

  const backgroundColor =
    appearance === "tint" ? getRGBAFromHex(colorClass) : undefined;
  const iconColor =
    appearance === "filled" ? "stroke-base" : `stroke-${colorClass}`;

  return (
    <div
      ref={ref}
      className={cn(
        `flex items-center rounded-full text-sm`,
        colorClass ? `${appearanceClass}` : "",
        className
      )}
      {...other}
      style={{
        padding: "1px 4px",
        backgroundColor,
        ...other.style,
      }}
    >
      {leadingElement && <div className={cn(iconColor)}>{leadingElement}</div>}
      {children && <span className="mx-1">{children}</span>}
      {trailingElement && (
        <div className={cn(iconColor)}>{trailingElement}</div>
      )}
    </div>
  );
});

export default Badge;

Badge.displayName = "Badge";
