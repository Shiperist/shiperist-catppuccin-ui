import React, { FC } from "react";
import { TypographyProps, formatClass, cn } from "@shiperist-catppuccin-ui/utilities";

const Caption2: FC<TypographyProps> = ({ bold, italic, error, underline, className = "", children, ...props }) => {
  return (
    <p
      className={cn([formatClass(bold, italic, underline), error ? "text-red" : ["text-text", "text-xs"], className])}
      {...props}>
      {children}
    </p>
  );
};

Caption2.displayName = "Caption2";

export default Caption2;
