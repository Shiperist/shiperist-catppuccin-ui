import React from "react";
import { formatClass, cn } from "@shiperist-catppuccin-ui/utilities";
import { TypographyProps } from ".";

export const Link = React.forwardRef<HTMLParagraphElement, TypographyProps>((props, ref) => {
  const { bold, italic, error, underline, className = "", ...other } = props;

  return (
    <p
      ref={ref}
      className={cn([formatClass(bold, italic, underline), `text-text cursor-pointer text-base hover:underline`])}
      {...other}></p>
  );
});

Link.displayName = "Link";
