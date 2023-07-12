import React, { FC } from "react";
import { TypographyProps, formatClass } from "@shiperist-catppuccin-ui/utilities";

const Subtitle: FC<TypographyProps> = ({
  bold = false,
  italic = false,
  underline = false,
  className = "",
  children,
  ...props
}) => {
  const textClass = `${formatClass(bold, italic, underline)} text-text text-2xl`;
  return (
    <h3 className={`${className} ${textClass}`} {...props}>
      {children}
    </h3>
  );
};

Subtitle.displayName = "Subtitle";

export default Subtitle;
