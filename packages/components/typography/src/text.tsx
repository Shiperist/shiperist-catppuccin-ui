import React, { FC } from "react";
import { TypographyProps, formatClass } from "@shiperist-catppuccin-ui/utilities";

const Text: FC<TypographyProps> = ({
  bold = false,
  italic = false,
  as: Element = "span",
  error,
  underline = false,
  className = "",
  children,
  ...props
}) => {
  const textClass = [formatClass(bold, italic, underline), error ? "text-red" : "text-text", "text-base"].join(" ");

  return (
    <Element className={`${className} ${textClass}`} {...props}>
      {children}
    </Element>
  );
};

Text.displayName = "Text";

export default Text;
