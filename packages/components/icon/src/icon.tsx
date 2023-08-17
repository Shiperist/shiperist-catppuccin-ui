import React from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";
import { IconProps, iconSizeClass } from ".";

export const Icon = React.forwardRef<HTMLDivElement, IconProps>((props, ref) => {
  const { size = "medium", icon, color, className = "", ...other } = props;
  const containerClass = cn(iconSizeClass[size] || iconSizeClass.medium, className, { [`stroke-${color}`]: color });

  return (
    <div className={containerClass} ref={ref} {...other}>
      {icon}
    </div>
  );
});

Icon.displayName = "Icon";
