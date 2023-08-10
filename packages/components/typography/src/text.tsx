import React, { FC } from "react";
import { cn, formatClass } from "@shiperist-catppuccin-ui/utilities";
import { TypographyProps } from ".";

export const Text: FC<TypographyProps> = ({
  bold,
  italic,
  as: Element = "span",
  error,
  underline,
  className = "",
  ...props
}) => {
  return (
    <Element
      className={cn([formatClass(bold, italic, underline), error ? "text-red" : "text-text", className])}
      {...props}></Element>
  );
};

Text.displayName = "Text";
