import React, { FC, ReactNode } from "react";
import { cn, getRGBAFromHex } from "@shiperist-catppuccin-ui/utilities";

export type BadgeVariant = "success" | "warning" | "danger" | "info";
export type BadgeAppearance = "filled" | "ghost" | "tint" | "outline";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  leadingElement?: ReactNode;
  trailingElement?: ReactNode;
  variant?: BadgeVariant;
  appearance?: BadgeAppearance;
}

const Badge: FC<BadgeProps> = ({
  leadingElement,
  trailingElement,
  variant = "success",
  appearance = "filled",
  className = "",
  children,
  ...props
}) => {
  const variantColor = {
    success: "green",
    danger: "red",
    warning: "yellow",
    info: "blue",
  }[variant];

  const appearanceClass = {
    filled: `bg-${variantColor} text-mantle`,
    outline: `border border-${variantColor} text-${variantColor}`,
    ghost: `text-${variantColor}`,
    tint: `text-${variantColor} border border-${variantColor}`,
  }[appearance];

  const backgroundColor = appearance === "tint" ? getRGBAFromHex(variantColor) : undefined;

  return (
    <div
      className={cn(`text-sm flex items-center rounded-full`, variantColor ? `${appearanceClass}` : "", className)}
      {...props}
      style={{
        padding: 1,
        paddingLeft: 4,
        paddingRight: 4,
        backgroundColor,
        ...props.style,
      }}>
      {leadingElement && <div className={cn("stroke-overlay1")}>{leadingElement}</div>}
      {children && <span className="mx-1">{children}</span>}
      {trailingElement && <div className={cn("stroke-overlay1")}>{trailingElement}</div>}
    </div>
  );
};

export default Badge;
