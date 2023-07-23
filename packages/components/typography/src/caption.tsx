import React from "react";
import { TypographyProps, formatClass, cn } from "@shiperist-catppuccin-ui/utilities";

const Caption = React.forwardRef<HTMLParagraphElement, TypographyProps>((props, ref) => {
  const { bold, italic, error, underline, className = "", children, ...other } = props;

  return (
    <p
      ref={ref}
      className={cn([formatClass(bold, italic, underline), error ? "text-red" : ["text-text", "text-sm"], className])}
      {...other}>
      {children}
    </p>
  );
});

Caption.displayName = "Caption";

export default Caption;
