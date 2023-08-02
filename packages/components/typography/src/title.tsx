import React from "react";
import {
  TypographyProps,
  formatClass,
  cn,
} from "@shiperist-catppuccin-ui/utilities";

const Title = React.forwardRef<HTMLHeadingElement, TypographyProps>(
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
      <h1
        ref={ref}
        className={cn([
          formatClass(bold, italic, underline),
          "text-text text-4xl",
        ])}
        {...other}
      >
        {children}
      </h1>
    );
  }
);

Title.displayName = "Title";

export default Title;
