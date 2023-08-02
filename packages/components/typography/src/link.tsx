import React from "react";
import { TypographyProps, formatClass, cn } from "@shiperist-catppuccin-ui/utilities";

const Link = React.forwardRef<HTMLParagraphElement, TypographyProps>((props, ref) => {
  const { bold, italic, error, underline, className = "", children, ...other } = props;

  return (
    <p
      ref={ref}
      className={cn([formatClass(bold, italic, underline), `text-text text-base hover:underline cursor-pointer`])}
      {...other}>
      {children}
    </p>
  );
});

Link.displayName = "Link";

export default Link;
