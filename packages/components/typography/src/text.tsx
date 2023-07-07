import React from "react";
import { TypographyProps, formatClass } from "../../../utilities/src/typography";

const Text: React.FC<TypographyProps> = ({
  bold = false,
  italic = false,
  as = "span",
  error = false,
  underline = false,
  className = "",
  children,
  ...other
}) => {
  const textClass = `${formatClass(bold, italic, underline)} ${error ? "text-red" : "text-text"} text-base`;
  const Element = as;

  return (
    <Element className={`${className} ${textClass}`} {...other}>
      {children}
    </Element>
  );
};

Text.displayName = "Text";

export default Text;
