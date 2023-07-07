import React from "react";

const appearance = ["filled", "shadow", "outline"] as const;
export type CardAppearance = (typeof appearance)[number];
const orientation = ["horizontal", "vertical"] as const;
export type CardOrientation = (typeof orientation)[number];

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  appearance?: CardAppearance;
  orientation?: CardOrientation;
}

const Card: React.FC<CardProps> = ({
  appearance = "outline",
  orientation = "vertical",
  className = "",
  children,
  ...other
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

  const cardClass = `p-8 rounded-lg flex  ${appearanceClass} ${orientationClass}`;
  return (
    <div className={`${className} ${cardClass}`} {...other}>
      {children}
    </div>
  );
};

export default Card;

Card.displayName = "Card";
