import React, { FC } from "react";
import { TypographyProps, cn, formatClass } from "@shiperist-catppuccin-ui/utilities";

const Title: FC<TypographyProps> = ({ bold, italic, underline, className = "", children, ...props }) => {
  return (
    <h1 className={cn([formatClass(bold, italic, underline), "text-text text-4xl"])} {...props}>
      {children}
    </h1>
  );
};

Title.displayName = "Title";

export default Title;
