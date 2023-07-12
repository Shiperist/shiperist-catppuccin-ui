import React, { FC } from "react";
import { TypographyProps, formatClass } from "@shiperist-catppuccin-ui/utilities";

const Caption: FC<TypographyProps> = ({
  bold = false,
  italic = false,
  error,
  underline = false,
  className = "",
  children,
  ...props
}) => {
  const textClass = [formatClass(bold, italic, underline), error ? "text-red" : "text-text", "text-sm"].join(" ");

  return (
    <p className={`${className} ${textClass}`} {...props}>
      {children}
    </p>
  );
};

Caption.displayName = "Caption";

export default Caption;
