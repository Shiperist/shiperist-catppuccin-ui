import React from "react";
import { cn, ColorVariants, Orientation, colors } from "@shiperist-catppuccin-ui/utilities";
import { orientations, border } from "@shiperist-catppuccin-ui/utilities";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  appearance?: "filled" | "shadow" | "outline" | "embed";
  orientation?: Orientation;
  variant?: ColorVariants;
  gap?: string | number;
  disabled?: boolean;
  border?: "tiny" | "small" | "medium";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { appearance, orientation, disabled, border, gap, variant, className = "", children, ...other } = props;
  const colorClass = colors[variant] || colors.base;
  const orientationClass = orientations[orientation] || orientations.vertical;
  const borderClass = border[border] || 1;
  const appearanceClass =
    {
      filled: `bg-mantle border border-transparent`,
      outline: `border border-overlay0`,
      shadow: "bg-mantle shadow-lg border border-transparent",
      embed: `border-${colorClass} bg-mantle`,
    }[appearance] || "border border-overlay0";

  const convertedGap = typeof gap === "string" && gap.match(/[a-zA-Z]/) ? gap : `${gap}px`;

  const cardStyles = {
    borderWidth: appearance === "outline" ? borderClass : undefined,
    gap: convertedGap ? convertedGap : undefined,
    borderLeftWidth: appearance === "embed" ? 4 : borderClass,
    ...other.style,
  };

  return (
    <div
      ref={ref}
      className={cn("p-8 rounded-xl flex", appearanceClass, orientationClass, className, {
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
