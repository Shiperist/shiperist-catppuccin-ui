import React from "react";
import { formatClass, cn } from "@shiperist-catppuccin-ui/utilities";
import { TypographyProps } from ".";

export const Caption = React.forwardRef<HTMLParagraphElement, TypographyProps>((props, ref) => {
  const { bold, italic, error, underline, className = "", ...other } = props;

  return (
    <p
      ref={ref}
      className={cn([formatClass(bold, italic, underline), error ? "text-red" : ["text-text", "text-sm"], className])}
      {...other}></p>
  );
});

Caption.displayName = "Caption";
