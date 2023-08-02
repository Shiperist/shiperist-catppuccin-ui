import React from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: string | number;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  (props, ref) => {
    const { gap, className = "", children, ...other } = props;
    const convertedGap =
      typeof gap === "string" && gap.match(/[a-zA-Z]/) ? gap : `${gap}px`;

    const cardHeaderStyles = {
      gap: convertedGap ? convertedGap : undefined,
      ...other.style,
    };

    return (
      <div
        ref={ref}
        className={cn(className)}
        style={cardHeaderStyles}
        {...other}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = "CardHeader";

export default CardHeader;
