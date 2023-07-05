import React from "react";
import { TypographyProps } from "../../../../utilities/src/typography";

const Subtitle: React.FC<TypographyProps> = ({ bold = false, italic = false, className = "", children, ...other }) => {
  const textClass = `${bold ? "font-bold" : ""} ${italic ? "italic" : ""} text-text text-2xl`;
  return (
    <h3 className={`${className} ${textClass}`} {...other}>
      {children}
    </h3>
  );
};

Subtitle.displayName = "Subtitle";

export default Subtitle;
