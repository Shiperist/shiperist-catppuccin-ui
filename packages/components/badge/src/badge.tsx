import React, { ReactNode } from "react";
import { cn, getRGBAFromHex, ColorVariants } from "@shiperist-catppuccin-ui/utilities";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  leadingElement?: ReactNode;
  trailingElement?: ReactNode;
  variant?: ColorVariants;
  appearance?: "filled" | "ghost" | "tint" | "outline";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const { leadingElement, trailingElement, variant, appearance, className = "", children, ...other } = props;

  const variantColor =
    {
      success: "green",
      danger: "red",
      warning: "yellow",
      info: "blue",
      base: "overlay2",
    }[variant] || "base";

  const appearanceClass =
    {
      filled: `bg-${variantColor} text-mantle border border-transparent`,
      outline: `border border-${variantColor} text-${variantColor}`,
      ghost: `text-${variantColor} border border-transparent`,
      tint: `text-${variantColor} border border-transparent`,
    }[appearance] || "filled";

  const backgroundColor = appearance === "tint" ? getRGBAFromHex(variantColor) : undefined;

  return (
    <div
      ref={ref}
      className={cn(`text-sm flex items-center rounded-full`, variantColor ? `${appearanceClass}` : "", className)}
      {...other}
      style={{
        padding: "1px 4px",
        backgroundColor,
        ...other.style,
      }}>
      {leadingElement && <div className={cn("stroke-overlay1")}>{leadingElement}</div>}
      {children && <span className="mx-1">{children}</span>}
      {trailingElement && <div className={cn("stroke-overlay1")}>{trailingElement}</div>}
    </div>
  );
});

export default Badge;

Badge.displayName = "Badge";
