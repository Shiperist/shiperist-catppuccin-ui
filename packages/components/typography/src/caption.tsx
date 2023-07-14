import React, { FC } from "react";
import { TypographyProps, formatClass, cn } from "@shiperist-catppuccin-ui/utilities";

const Caption: FC<TypographyProps> = ({ bold, italic, error, underline, className = "", children, ...props }) => {
  return (
    <p
      className={cn([formatClass(bold, italic, underline), error ? "text-red" : ["text-text", "text-sm"], className])}
      {...props}>
      {children}
    </p>
  );
};

Caption.displayName = "Caption";

export default Caption;
