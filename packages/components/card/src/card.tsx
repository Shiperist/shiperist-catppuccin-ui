import React from "react";
import { cn, ColorVariants, Orientation, colors } from "@shiperist-catppuccin-ui/utilities";
import { orientations } from "@shiperist-catppuccin-ui/utilities";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  appearance?: "filled" | "shadow" | "outline" | "embed";
  orientation?: Orientation;
  variant?: ColorVariants;
  gap?: string | number;
  disabled?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { appearance, orientation, disabled, gap, variant, className = "", children, ...other } = props;
  const colorClass = colors[variant] || colors.base;
  const orientationClass = orientations[orientation] || orientations.vertical;
  const appearanceClass =
    {
      filled: `bg-mantle border border-transparent`,
      outline: `border border-overlay0 border-2`,
      shadow: "bg-mantle shadow-lg border border-transparent",
      embed: `border-${colorClass} bg-mantle border-l-4`,
    }[appearance] || "border border-overlay0";

  const convertedGap = typeof gap === "string" && gap.match(/[a-zA-Z]/) ? gap : `${gap}px`;

  const cardStyles = {
    gap: convertedGap ? convertedGap : undefined,
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
