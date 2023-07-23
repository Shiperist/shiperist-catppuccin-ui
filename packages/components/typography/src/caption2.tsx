import React from "react";
import { TypographyProps, formatClass, cn } from "@shiperist-catppuccin-ui/utilities";

const Caption2 = React.forwardRef<HTMLParagraphElement, TypographyProps>((props, ref) => {
  const { bold, italic, error, underline, className = "", children, ...other } = props;

  return (
    <p
      ref={ref}
      className={cn([formatClass(bold, italic, underline), error ? "text-red" : ["text-text", "text-xs"], className])}
      {...other}>
      {children}
    </p>
  );
});

Caption2.displayName = "Caption2";

export default Caption2;
