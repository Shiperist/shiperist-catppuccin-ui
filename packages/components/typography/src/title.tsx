import React from "react";
import { TypographyProps, formatClass } from "@shiperist-catppuccin-ui/utilities";

const Title: React.FC<TypographyProps> = ({
  bold = false,
  italic = false,
  underline = false,
  className = "",
  children,
  ...other
}) => {
  const textClass = `${formatClass(bold, italic, underline)} text-text text-4xl`;
  return (
    <h1 className={`${className} ${textClass}`} {...other}>
      {children}
    </h1>
  );
};

Title.displayName = "Title";

export default Title;
