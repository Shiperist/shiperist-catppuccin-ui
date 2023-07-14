import React, { FC } from "react";
import { TypographyProps, cn, formatClass } from "@shiperist-catppuccin-ui/utilities";

const Subtitle: FC<TypographyProps> = ({ bold, italic, underline, className = "", children, ...props }) => {
  return (
    <h3 className={cn([formatClass(bold, italic, underline), "text-text text-2xl"])} {...props}>
      {children}
    </h3>
  );
};

Subtitle.displayName = "Subtitle";

export default Subtitle;
