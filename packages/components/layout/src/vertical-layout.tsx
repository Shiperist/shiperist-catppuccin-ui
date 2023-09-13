import React from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";
import { VerticalLayoutProps } from ".";

export const VerticalLayout = React.forwardRef<HTMLDivElement, VerticalLayoutProps>((props, ref) => {
  const { className = "", children, ...other } = props;
  return (
    <div ref={ref} className={cn("flex flex-col", className)} {...other}>
      {children}
    </div>
  );
});

VerticalLayout.displayName = "VerticalLayout";
