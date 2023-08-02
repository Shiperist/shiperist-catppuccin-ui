import React, { FC } from "react";
import {
  TypographyProps,
  cn,
  formatClass,
} from "@shiperist-catppuccin-ui/utilities";

const Text: FC<TypographyProps> = ({
  bold,
  italic,
  as: Element = "span",
  error,
  underline,
  className = "",
  children,
  ...props
}) => {
  return (
    <Element
      className={cn([
        formatClass(bold, italic, underline),
        error ? "text-red" : ["text-text", "text-base"],
        className,
      ])}
      {...props}
    >
      {children}
    </Element>
  );
};

Text.displayName = "Text";

export default Text;
