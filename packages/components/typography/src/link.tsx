import React, { FC } from "react";
import { TypographyProps, cn, formatClass } from "@shiperist-catppuccin-ui/utilities";

const Link: FC<TypographyProps> = ({ bold, italic, underline, className = "", children, ...props }) => {
  return (
    <p
      className={cn([formatClass(bold, italic, underline), `text-text text-base hover:underline cursor-pointer`])}
      {...props}>
      {children}
    </p>
  );
};

Link.displayName = "Link";

export default Link;
