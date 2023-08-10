import React from "react";
import { formatClass, cn } from "@shiperist-catppuccin-ui/utilities";
import { TypographyProps } from ".";

export const Subtitle = React.forwardRef<HTMLHeadingElement, TypographyProps>((props, ref) => {
  const { bold, italic, error, underline, className = "", ...other } = props;

  return <h3 ref={ref} className={cn([formatClass(bold, italic, underline), "text-text text-2xl"])} {...other}></h3>;
});

Subtitle.displayName = "Subtitle";
