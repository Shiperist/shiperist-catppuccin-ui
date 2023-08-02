import React, { ReactNode } from "react";
import { cn, ColorSet, Size } from "@shiperist-catppuccin-ui/utilities";

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: Size;
  color?: ColorSet;
  icon?: ReactNode;
}

const Icon = React.forwardRef<HTMLDivElement, IconProps>((props, ref) => {
  const { size, icon, color, className, children, ...other } = props;
  const sizeClass =
    {
      small: "w-4 h-4",
      medium: "w-5 h-5",
      large: "w-6 h-6",
      xlarge: "h-7 w-7",
    }[size] || "w-5 h-5";

  return (
    <div
      className={cn(sizeClass, className, { [`stroke-${color}`]: color })}
      ref={ref}
      {...other}
    >
      {icon}
    </div>
  );
});

Icon.displayName = "Icon";

export default Icon;
