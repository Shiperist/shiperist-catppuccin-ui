import React from "react";
import { TypographyProps } from "../../../../utilities/src/typography";

const Caption2: React.FC<TypographyProps> = ({
  bold = false,
  italic = false,
  error = false,
  className = "",
  children,
  ...other
}) => {
  const textClass = `${bold ? "font-bold" : ""} ${italic ? "italic" : ""} ${error ? "text-red" : "text-text"} text-xs`;
  return (
    <p className={`${className} ${textClass}`} {...other}>
      {children}
    </p>
  );
};

Caption2.displayName = "Caption2";

export default Caption2;
