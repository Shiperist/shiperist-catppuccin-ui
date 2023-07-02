import React from "react";
import { FC, ReactNode } from "react";

const variants = ["success", "warning", "danger", "info"] as const;

export type BadgeVariant = (typeof variants)[number];

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  variant?: BadgeVariant;
}

const Badge: FC<BadgeProps> = ({
  icon: Icon,
  iconPosition = "left",
  variant = "success",
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
  //Fix the width of the badge, its scuffed idk
  const variantClass = variantColor ? `text-${variantColor} bg-${variantColor}/80 ` : "";
  const badgeClass = variantClass + " p-1 flex gap-1 flex-shrink-0 rounded-lg text-sm";
  const currentIcon = Icon;

  return (
    <div className={`${className} ${badgeClass}`} {...other}>
      {currentIcon && iconPosition === "left" && currentIcon}
      <span className={`${children ? "mx-2" : ""}`}>{children}</span>
      {currentIcon && iconPosition === "right" && currentIcon}
    </div>
  );
};

export default Badge;

Badge.displayName = "Badge";
