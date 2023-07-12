import React, { FC } from "react";
import { TypographyProps, formatClass } from "@shiperist-catppuccin-ui/utilities";

const Caption2: FC<TypographyProps> = ({
  bold = false,
  italic = false,
  error,
  underline = false,
  className = "",
  children,
  ...props
}) => {
  const textClass = [formatClass(bold, italic, underline), error ? "text-red" : "text-text", "text-xs"].join(" ");

  return (
    <p className={`${className} ${textClass}`} {...props}>
      {children}
    </p>
  );
};

Caption2.displayName = "Caption2";

export default Caption2;
