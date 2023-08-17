import React from "react";
import { formatClass, cn } from "@shiperist-catppuccin-ui/utilities";
import { TypographyProps } from ".";

export const Title = React.forwardRef<HTMLHeadingElement, TypographyProps>((props, ref) => {
  const { bold, italic, error, underline, className = "", ...other } = props;
  return (
    <h1
      ref={ref}
      className={cn([formatClass(bold, italic, underline), "text-text text-4xl"], className)}
      {...other}></h1>
  );
});

Title.displayName = "Title";
