import React from "react";
import { TypographyProps, formatClass } from "@shiperist-catppuccin-ui/utilities";

const Caption: React.FC<TypographyProps> = ({
  bold = false,
  italic = false,
  error = false,
  underline = false,
  className = "",
  children,
  ...other
}) => {
  const textClass = `${formatClass(bold, italic, underline)} ${error ? "text-red" : "text-text"} text-sm`;
  return (
    <p className={`${className} ${textClass}`} {...other}>
      {children}
    </p>
  );
};

Caption.displayName = "Caption";

export default Caption;
