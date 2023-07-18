import React, { FC } from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Divider: FC<DividerProps> = ({ className = "", children, ...props }) => {
  return (
    <div
      className={cn("mx-auto mt-2 mb-1 w-full bg-overlay2 rounded-lg", className)}
      {...props}
      style={{ height: "1px" }}>
      {children}
    </div>
  );
};

export default Divider;

Divider.displayName = "Divider";
