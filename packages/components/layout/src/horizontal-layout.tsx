import React, { FC } from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export interface HorizontalLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

const HorizontalLayout: FC<HorizontalLayoutProps> = ({ className = "", children, ...props }) => {
  return (
    <div className={cn("flex flex-row", className)} {...props}>
      {children}
    </div>
  );
};

export default HorizontalLayout;

HorizontalLayout.displayName = "HorizontalLayout";
