import React from "react";
import { TypographyProps, formatClass } from "@shiperist-catppuccin-ui/utilities";

const Subtitle: React.FC<TypographyProps> = ({
  bold = false,
  italic = false,
  underline = false,
  className = "",
  children,
  ...other
}) => {
  const textClass = `${formatClass(bold, italic, underline)} text-text text-2xl`;
  return (
    <h3 className={`${className} ${textClass}`} {...other}>
      {children}
    </h3>
  );
};

Subtitle.displayName = "Subtitle";

export default Subtitle;
