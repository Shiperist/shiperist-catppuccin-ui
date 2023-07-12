import React, { FC } from "react";
import { TypographyProps, formatClass } from "@shiperist-catppuccin-ui/utilities";

const Link: FC<TypographyProps> = ({
  bold = false,
  italic = false,
  underline = false,
  className = "",
  children,
  ...props
}) => {
  const textClass = `${formatClass(bold, italic, underline)} text-text text-base hover:underline cursor-pointer`;
  return (
    <p className={`${className} ${textClass}`} {...props}>
      {children}
    </p>
  );
};

Link.displayName = "Link";

export default Link;
