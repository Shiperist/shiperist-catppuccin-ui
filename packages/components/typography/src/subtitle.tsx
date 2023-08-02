import React from "react";
import {
  TypographyProps,
  formatClass,
  cn,
} from "@shiperist-catppuccin-ui/utilities";

const Subtitle = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  (props, ref) => {
    const {
      bold,
      italic,
      error,
      underline,
      className = "",
      children,
      ...other
    } = props;

    return (
      <h3
        ref={ref}
        className={cn([
          formatClass(bold, italic, underline),
          "text-text text-2xl",
        ])}
        {...other}
      >
        {children}
      </h3>
    );
  }
);

Subtitle.displayName = "Subtitle";

export default Subtitle;
