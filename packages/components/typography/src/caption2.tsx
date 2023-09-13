import React from "react";
import { formatClass, cn } from "@shiperist-catppuccin-ui/utilities";
import { TypographyProps } from ".";

export const Caption2 = React.forwardRef<HTMLParagraphElement, TypographyProps>((props, ref) => {
  const { bold, italic, error, underline, className = "", ...other } = props;

  return (
    <p
      ref={ref}
      className={cn([formatClass(bold, italic, underline), error ? "text-red" : ["text-text", "text-xs"], className])}
      {...other}></p>
  );
});

Caption2.displayName = "Caption2";
