import React from "react";
import { TypographyProps } from "../../../../utilities/src/typography";

const Link: React.FC<TypographyProps> = ({ bold = false, italic = false, className = "", children, ...other }) => {
  const textClass = `${bold ? "font-bold" : ""} ${
    italic ? "italic" : ""
  } text-text text-base hover:underline cursor-pointer`;
  return (
    <p className={`${className} ${textClass}`} {...other}>
      {children}
    </p>
  );
};

Link.displayName = "Link";

export default Link;
