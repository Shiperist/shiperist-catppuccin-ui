import React from "react";
import { KbdProps, kbdContainerClass } from ".";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export const Kbd = React.forwardRef<HTMLDivElement, KbdProps>((props, ref) => {
  const { className = "", size = "medium", appearance = "filled", icon, children, ...other } = props;
  return (
    <div ref={ref} className={cn(kbdContainerClass(size, appearance), className)} {...other}>
      {icon ? <div className="stroke-overlay2">{icon}</div> : <div>{children}</div>}
    </div>
  );
});

Kbd.displayName = "Kbd";
