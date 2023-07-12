import React, { FC } from "react";
import { TypographyProps, formatClass } from "@shiperist-catppuccin-ui/utilities";

const Title: FC<TypographyProps> = ({
  bold = false,
  italic = false,
  underline = false,
  className = "",
  children,
  ...props
}) => {
  const textClass = `${formatClass(bold, italic, underline)} text-text text-4xl`;
  return (
    <h1 className={`${className} ${textClass}`} {...props}>
      {children}
    </h1>
  );
};

Title.displayName = "Title";

export default Title;
