import React from "react";
import { TypographyProps, formatClass } from "../../../utilities/src/typography";

const Link: React.FC<TypographyProps> = ({
  bold = false,
  italic = false,
  underline = false,
  className = "",
  children,
  ...other
}) => {
  const textClass = `${formatClass(bold, italic, underline)} text-text text-base hover:underline cursor-pointer`;
  return (
    <p className={`${className} ${textClass}`} {...other}>
      {children}
    </p>
  );
};

Link.displayName = "Link";

export default Link;
