import React, { FC } from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export interface VerticalLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

const VerticalLayout: FC<VerticalLayoutProps> = ({ className = "", children, ...props }) => {
  const layoutClass = "flex flex-col";
  return (
    <div className={cn(layoutClass, className)} {...props}>
      {children}
    </div>
  );
};

export default VerticalLayout;

VerticalLayout.displayName = "VerticalLayout";
