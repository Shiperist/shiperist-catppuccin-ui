import React from "react";
import { FC, ReactNode } from "react";
import { Size } from "@shiperist-catppuccin-ui/utilities";

const variants = ["success", "warning", "danger", "info"] as const;
const appearance = ["filled", "outline"] as const;

export type BadgeVariant = (typeof variants)[number];
export type BadgeAppearance = (typeof appearance)[number];

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  variant?: BadgeVariant;
  appearance?: BadgeAppearance;
  size?: Size;
}

const Badge: FC<BadgeProps> = ({
  icon: Icon,
  iconPosition = "left",
  variant = "success",
  appearance = "filled",
  size = "medium",
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
    filled: `bg-${variantColor}/80`,
    outline: `border border-${variantColor}`,
  }[appearance];

  const sizeClass =
    {
      small: "text-sm px-2 py-1",
      medium: "text-base px-4 py-2",
      large: "text-lg px-6 py-3",
      xlarge: "text-xl px-8 py-4",
    }[size] || "";

  const variantClass = variantColor ? `text-${variantColor} ${appearanceClass} ${sizeClass}` : "";
  const badgeClass = `${variantClass} p-1 flex items-center rounded-full`;
  const currentIcon = Icon;

  return (
    <div className={`${className} ${badgeClass}`} {...other}>
      {currentIcon && iconPosition === "left" && currentIcon}
      <span className={`${children ? "mx-1" : ""}`}>{children}</span>
      {currentIcon && iconPosition === "right" && currentIcon}
    </div>
  );
};

export default Badge;

Badge.displayName = "Badge";
