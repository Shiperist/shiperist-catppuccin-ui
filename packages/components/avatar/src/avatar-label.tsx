import React from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";
import { AvatarLabelProps } from ".";

export const AvatarLabel = React.forwardRef<HTMLSpanElement, AvatarLabelProps>((props, ref) => {
  const { name, className = "", ...other } = props;

  const getInitials = (name: string) => {
    const initials = name
      .split(" ")
      .map((part) => part.charAt(0).toUpperCase())
      .join("");
    return initials.slice(0, 3);
  };

  return (
    <span ref={ref} className={cn("text-white", className)} {...other}>
      {getInitials(name)}
    </span>
  );
});

AvatarLabel.displayName = "AvatarLabel";
