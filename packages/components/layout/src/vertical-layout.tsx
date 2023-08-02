import React, { FC } from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export interface VerticalLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const VerticalLayout: FC<VerticalLayoutProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <div className={cn("flex flex-col", className)} {...props}>
      {children}
    </div>
  );
};

export default VerticalLayout;

VerticalLayout.displayName = "VerticalLayout";
