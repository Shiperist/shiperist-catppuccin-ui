import React, { FC } from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Divider: FC<DividerProps> = ({ className = "", children, ...props }) => {
  const dividerClass = "mx-auto mt-2 mb-1 w-full bg-lavender rounded-lg";
  return (
    <div className={cn(dividerClass, className)} {...props} style={{ height: "1px" }}>
      {children}
    </div>
  );
};

export default Divider;

Divider.displayName = "Divider";
