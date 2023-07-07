import React from "react";
import { TypographyProps } from "../../../../utilities/src/typography";

const Caption: React.FC<TypographyProps> = ({
  bold = false,
  italic = false,
  error = false,
  className = "",
  children,
  ...other
}) => {
  const textClass = `${bold ? "font-bold" : ""} ${italic ? "italic" : ""} ${error ? "text-red" : "text-text"} text-sm`;
  return (
    <p className={`${className} ${textClass}`} {...other}>
      {children}
    </p>
  );
};

Caption.displayName = "Caption";

export default Caption;
