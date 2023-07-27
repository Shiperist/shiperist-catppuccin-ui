import React from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export interface AvatarLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  name?: string;
}

const AvatarLabel = React.forwardRef<HTMLSpanElement, AvatarLabelProps>((props, ref) => {
  const { name, className = "", ...other } = props;

  const getInitials = (name: string) => {
    const initials = name
      .split(" ")
      .map((part) => part.charAt(0).toUpperCase())
      .join("");
    return initials.slice(0, 3);
  };

  return (
    <span ref={ref} className={cn("text-white font-bold", className)} {...other}>
      {getInitials(name)}
    </span>
  );
});

AvatarLabel.displayName = "AvatarLabel";

export default AvatarLabel;
