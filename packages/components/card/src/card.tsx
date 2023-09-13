import React from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";
import { CardProps, cardBaseClass } from ".";

export const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    appearance = "outline",
    orientation = "vertical",
    disabled,
    gap,
    variant = "base",
    className = "",
    children,
    ...other
  } = props;

  const cardContainerStyles = cn(cardBaseClass(disabled, variant, appearance, orientation), className);
  const convertedGap = typeof gap === "string" && gap.match(/[a-zA-Z]/) ? gap : `${gap}px`;
  const cardStyles = {
    gap: convertedGap ? convertedGap : undefined,
    ...other.style,
  };

  return (
    <div ref={ref} className={cardContainerStyles} style={cardStyles} {...other}>
      {children}
    </div>
  );
});

Card.displayName = "Card";
