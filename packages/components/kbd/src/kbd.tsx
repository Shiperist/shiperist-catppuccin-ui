import React from "react";
import { KbdProps, kbdContainerClass } from ".";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export const Kbd = React.forwardRef<HTMLDivElement, KbdProps>((props, ref) => {
  const { className = "", size = "medium", appearance = "filled", children, ...other } = props;
  return (
    <div ref={ref} className={cn(kbdContainerClass(size, appearance), className)} {...other}>
      {children}
    </div>
  );
});

Kbd.displayName = "Kbd";
