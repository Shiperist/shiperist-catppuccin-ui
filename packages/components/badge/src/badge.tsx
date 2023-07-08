import React from "react";
import { FC, ReactNode } from "react";
import { getRGBAFromHex } from "@shiperist-catppuccin-ui/utilities";

const variants = ["success", "warning", "danger", "info"] as const;
const appearance = ["filled", "ghost", "tint", "outline"] as const;

export type BadgeVariant = (typeof variants)[number];
export type BadgeAppearance = (typeof appearance)[number];

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  variant?: BadgeVariant;
  appearance?: BadgeAppearance;
}

const Badge: FC<BadgeProps> = ({
  icon: Icon,
  iconPosition = "left",
  variant = "success",
  appearance = "filled",
  className = "",
  children,
  ...other
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

  const variantClass = variantColor ? `${appearanceClass}` : "";
  const badgeClass = `${variantClass} text-sm flex items-center rounded-full`;
  const currentIcon = Icon;

  return (
    <div
      className={`${className} ${badgeClass}`}
      {...other}
      style={{
        padding: 1,
        paddingLeft: 4,
        paddingRight: 4,
        ...(appearance === "tint" && { backgroundColor: getRGBAFromHex(variantColor) }),
        ...other.style,
      }}>
      {currentIcon && iconPosition === "left" && currentIcon}
      {children && <span className="mx-1">{children}</span>}
      {currentIcon && iconPosition === "right" && currentIcon}
    </div>
  );
};

export default Badge;

Badge.displayName = "Badge";
