import React, { FC } from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export interface HorizontalLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

const HorizontalLayout: FC<HorizontalLayoutProps> = ({ className = "", children, ...props }) => {
  const layoutClass = "flex flex-row";
  return (
    <div className={cn(layoutClass, className)} {...props}>
      {children}
    </div>
  );
};

export default HorizontalLayout;

HorizontalLayout.displayName = "HorizontalLayout";
