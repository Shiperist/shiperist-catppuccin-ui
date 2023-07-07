import React from "react";

const appearance = ["filled", "shadow", "outline"] as const;
export type CardAppearance = (typeof appearance)[number];

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  appearance?: CardAppearance;
}

const Card: React.FC<CardProps> = ({ appearance = "outline", className = "", children, ...other }) => {
  const appearanceClass = {
    filled: `bg-mantle`,
    outline: `border`,
    shadow: "bg-mantle shadow shadow-lg",
  }[appearance];

  const cardClass = `p-8 rounded-lg ${appearanceClass}`;
  return (
    <div className={`${className} ${cardClass}`} {...other}>
      {children}
    </div>
  );
};

export default Card;

Card.displayName = "Card";
