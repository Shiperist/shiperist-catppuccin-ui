import React from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export interface IndicatorLabelProps extends React.HTMLAttributes<HTMLSpanElement> {}

const IndicatorLabel: React.FC<IndicatorLabelProps> = React.forwardRef<HTMLSpanElement, IndicatorLabelProps>(
  (props, ref) => {
    const { className = "", children, ...other } = props;
    const shouldSlice = !isNaN(children as number) && String(children).length > 3;

    return (
      <span ref={ref} className={cn(className)} {...other}>
        {shouldSlice ? String(children).slice(0, 3) + "+" : children}
      </span>
    );
  }
);

IndicatorLabel.displayName = "IndicatorLabel";

export default IndicatorLabel;
