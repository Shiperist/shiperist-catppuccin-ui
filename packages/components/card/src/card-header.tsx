import React from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: string | number;
  gap?: string | number;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>((props, ref) => {
  const { padding, gap, className = "", children, ...other } = props;

  const convertedPadding = typeof padding === "string" && padding.match(/[a-zA-Z]/) ? padding : `${padding}px`;
  const convertedGap = typeof gap === "string" && gap.match(/[a-zA-Z]/) ? gap : `${gap}px`;

  const cardHeaderStyles = {
    padding: convertedPadding ? convertedPadding : undefined,
    gap: convertedGap ? convertedGap : undefined,
    ...other.style,
  };

  return (
    <div ref={ref} className={cn(className)} style={cardHeaderStyles} {...other}>
      {children}
    </div>
  );
});

CardHeader.displayName = "CardHeader";

export default CardHeader;
