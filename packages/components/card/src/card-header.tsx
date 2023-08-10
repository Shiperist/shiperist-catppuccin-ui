import React from "react";
import { cn, orientations } from "@shiperist-catppuccin-ui/utilities";
import { CardExtraProps } from ".";

export const CardHeader = React.forwardRef<HTMLDivElement, CardExtraProps>((props, ref) => {
  const { gap, orientation, className = "", children, ...other } = props;
  const convertedGap = typeof gap === "string" && gap.match(/[a-zA-Z]/) ? gap : `${gap}px`;
  const orientationClass = orientations[orientation] || orientations.vertical;

  const cardHeaderStyles = {
    gap: convertedGap ? convertedGap : undefined,
    ...other.style,
  };

  return (
    <div ref={ref} className={cn(className, orientationClass)} style={cardHeaderStyles} {...other}>
      {children}
    </div>
  );
});

CardHeader.displayName = "CardHeader";
