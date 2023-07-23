import React, { FC } from "react";
import { cn, ColorVariants, Orientation } from "@shiperist-catppuccin-ui/utilities";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  appearance?: "filled" | "shadow" | "outline" | "embed";
  orientation?: Orientation;
  variant?: ColorVariants;
  padding?: string;
  disabled?: boolean;
}

const Card: FC<CardProps> = ({
  appearance,
  orientation,
  disabled,
  padding,
  variant,
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
  const convertedPadding = typeof padding === "string" && padding.match(/[a-zA-Z]/) ? padding : `${padding}px`;

  const cardStyles = {
    ...(appearance === "embed" ? { borderLeftWidth: "4px" } : {}),
    padding: convertedPadding,
    ...props.style,
  };

  return (
    <div
      className={cn("rounded-lg flex", appearanceClass, orientationClass, className, {
        "opacity-50 cursor-not-allowed": disabled,
      })}
      style={cardStyles}
      {...props}>
      {children}
    </div>
  );
};

export default Card;

Card.displayName = "Card";
