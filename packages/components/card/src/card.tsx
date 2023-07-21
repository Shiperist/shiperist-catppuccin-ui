import React, { FC } from "react";
import { cn, ColorVariants, Orientation } from "@shiperist-catppuccin-ui/utilities";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  appearance?: "filled" | "shadow" | "outline" | "embed";
  orientation?: Orientation;
  variant?: ColorVariants;
}

const Card: FC<CardProps> = ({
  appearance = "outline",
  orientation = "vertical",
  variant = "base",
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
      filled: `bg-mantle`,
      outline: `border border-overlay0`,
      shadow: "bg-mantle shadow-lg",
      embed: `border-${variantColor} bg-mantle`,
    }[appearance] || "";

  const orientationClass =
    {
      horizontal: "flex-row",
      vertical: "flex-col",
    }[orientation] || "";

  return (
    <div
      className={cn("p-8 rounded-lg flex", appearanceClass, orientationClass, className)}
      style={appearance === "embed" ? { borderLeftWidth: "4px" } : undefined}
      {...props}>
      {children}
    </div>
  );
};

export default Card;

Card.displayName = "Card";
