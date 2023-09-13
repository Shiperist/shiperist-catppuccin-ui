import { cn, orientations } from "@shiperist-catppuccin-ui/utilities";
import React from "react";
import { Radio, RadioGroupProps, RadioProps } from ".";

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>((props, ref) => {
  const { orientation, className = "", disabled, name, children, ...other } = props;
  const orientationClass = orientations[orientation] || orientations.vertical;
  return (
    <div className={cn(`${orientationClass} ${className}`)} ref={ref} {...other}>
      {React.Children.map(children, (child) =>
        React.isValidElement<RadioProps>(child) && child.type === Radio
          ? React.cloneElement(child, { name, disabled })
          : child
      )}
    </div>
  );
});

RadioGroup.displayName = "RadioGroup";
