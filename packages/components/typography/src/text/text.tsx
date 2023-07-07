import React from "react";
import { TypographyProps } from "../../../../utilities/src/typography";

const Text: React.FC<TypographyProps> = ({
  bold = false,
  italic = false,
  as = "span",
  error = false,
  className = "",
  children,
  ...other
}) => {
  const textClass = `${bold ? "font-bold" : ""} ${italic ? "italic" : ""} ${
    error ? "text-red" : "text-text"
  } text-base`;
  const Element = as;

  return (
    <Element className={`${className} ${textClass}`} {...other}>
      {children}
    </Element>
  );
};

Text.displayName = "Text";

export default Text;
