import React, { FC } from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export type CardAppearance = "filled" | "shadow" | "outline";
export type CardOrientation = "horizontal" | "vertical";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  appearance?: CardAppearance;
  orientation?: CardOrientation;
}

const Card: FC<CardProps> = ({
  appearance = "outline",
  orientation = "vertical",
  className = "",
  children,
  ...props
}) => {
  const appearanceClass = {
    filled: `bg-mantle`,
    outline: `border`,
    shadow: "bg-mantle shadow shadow-lg",
  }[appearance];

  const orientationClass = {
    horizontal: "flex-row",
    vertical: "flex-col",
  }[orientation];

  return (
    <div className={cn("p-8 rounded-lg flex", appearanceClass, orientationClass, className)} {...props}>
      {children}
    </div>
  );
};

export default Card;

Card.displayName = "Card";
