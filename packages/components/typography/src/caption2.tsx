import React from "react";
import { TypographyProps, formatClass } from "../../../utilities/src/typography";

const Caption2: React.FC<TypographyProps> = ({
  bold = false,
  italic = false,
  error = false,
  underline = false,
  className = "",
  children,
  ...other
}) => {
  const textClass = `${formatClass(bold, italic, underline)} ${error ? "text-red" : "text-text"} text-xs`;
  return (
    <p className={`${className} ${textClass}`} {...other}>
      {children}
    </p>
  );
};

Caption2.displayName = "Caption2";

export default Caption2;
