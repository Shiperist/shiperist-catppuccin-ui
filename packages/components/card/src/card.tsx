import React from "react";
import { cn, ColorVariants, Orientation } from "@shiperist-catppuccin-ui/utilities";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  appearance?: "filled" | "shadow" | "outline" | "embed";
  orientation?: Orientation;
  variant?: ColorVariants;
  padding?: string | number;
  gap?: string | number;
  disabled?: boolean;
  border?: "tiny" | "small" | "medium";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    appearance,
    orientation,
    disabled,
    border,
    padding,
    gap,
    variant,
    className = "",
    children,
    ...other
  } = props;

  const borderClass = {
    tiny: "1px",
    small: "2px",
    medium: "3px",
  }[border];

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
  const convertedGap = typeof gap === "string" && gap.match(/[a-zA-Z]/) ? gap : `${gap}px`;

  const cardStyles = {
    borderWidth: appearance === "outline" ? borderClass : undefined,
    padding: convertedPadding ? convertedPadding : undefined,
    gap: convertedGap ? convertedGap : undefined,
    borderLeftWidth: appearance === "embed" ? "4px" : appearance === "outline" ? borderClass : undefined,
    ...other.style,
  };

  return (
    <div
      ref={ref}
      className={cn("rounded-xl flex", appearanceClass, orientationClass, className, {
        "opacity-50 cursor-not-allowed": disabled,
      })}
      style={cardStyles}
      {...other}>
      {children}
    </div>
  );
});

export default Card;

Card.displayName = "Card";
