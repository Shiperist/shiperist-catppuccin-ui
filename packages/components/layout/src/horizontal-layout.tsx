import React from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";
import { HorizontalLayoutProps } from ".";

export const HorizontalLayout = React.forwardRef<HTMLDivElement, HorizontalLayoutProps>((props, ref) => {
  const { className = "", children, ...other } = props;
  return (
    <div ref={ref} className={cn("flex flex-row", className)} {...other}>
      {children}
    </div>
  );
});

HorizontalLayout.displayName = "HorizontalLayout";
