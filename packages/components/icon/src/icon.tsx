import React, { ReactNode } from "react";
import { cn, Size } from "@shiperist-catppuccin-ui/utilities";

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: Size;
  icon?: ReactNode;
}

const Icon = React.forwardRef<HTMLDivElement, IconProps>((props, ref) => {
  const { size, icon, className, children, ...other } = props;
  const sizeClass =
    {
      small: "w-4 h-4",
      medium: "w-5 h-5",
      large: "w-5 h-5",
      xlarge: "h-6 w-6",
    }[size] || "medium";

  return (
    <div className={cn("", sizeClass, className)} ref={ref} {...other}>
      {icon}
    </div>
  );
});

Icon.displayName = "Icon";

export default Icon;
