import React from "react";
import { TypographyProps } from "../../../../utilities/src/typography";

const Title: React.FC<TypographyProps> = ({ bold = false, italic = false, className = "", children, ...other }) => {
  const textClass = `${bold ? "font-bold" : ""} ${italic ? "italic" : ""} text-text text-4xl`;
  return (
    <h1 className={`${className} ${textClass}`} {...other}>
      {children}
    </h1>
  );
};

Title.displayName = "Title";

export default Title;
