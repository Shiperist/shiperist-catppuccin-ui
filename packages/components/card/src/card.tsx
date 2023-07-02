import React, { FC } from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card: FC<CardProps> = ({ className = "", children, ...other }) => {
  const cardClass = "p-8 rounded-lg border-1 border-ctp-overlay1";
  return (
    <div className={`${className} ${cardClass}`} {...other}>
      {children}
    </div>
  );
};

export default Card;

Card.displayName = "Card";
