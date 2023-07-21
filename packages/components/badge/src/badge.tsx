import React, { FC, ReactNode } from "react";
import { cn, getRGBAFromHex, ColorVariants } from "@shiperist-catppuccin-ui/utilities";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  leadingElement?: ReactNode;
  trailingElement?: ReactNode;
  variant?: ColorVariants;
  appearance?: "filled" | "ghost" | "tint" | "outline";
}

const Badge: FC<BadgeProps> = ({
  leadingElement,
  trailingElement,
  variant = "base",
  appearance = "filled",
  className = "",
  children,
  ...props
}) => {
  const variantColor =
    {
      success: "green",
      danger: "red",
      warning: "yellow",
      info: "blue",
      base: "overlay2",
    }[variant] || "";

  const appearanceClass =
    {
      filled: `bg-${variantColor} text-mantle`,
      outline: `border border-${variantColor} text-${variantColor}`,
      ghost: `text-${variantColor}`,
      tint: `text-${variantColor}`,
    }[appearance] || "";

  const backgroundColor = appearance === "tint" ? getRGBAFromHex(variantColor) : undefined;

  return (
    <div
      className={cn(`text-sm flex items-center rounded-full`, variantColor ? `${appearanceClass}` : "", className)}
      {...props}
      style={{
        padding: "1px 4px",
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

Badge.displayName = "Badge";
