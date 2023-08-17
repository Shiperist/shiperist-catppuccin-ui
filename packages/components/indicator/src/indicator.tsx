import React, { CSSProperties } from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";
import {
  IndicatorProps,
  getIndicatorPositionStyleFromPreset,
  indicatorFontClass,
  indicatorLabelInsideClass,
  indicatorLabelOutsideClass,
  indicatorLabelOutsideContainerClass,
} from ".";

export const Indicator = React.forwardRef<HTMLDivElement, IndicatorProps>((props, ref) => {
  const {
    position,
    status = "active",
    isLegend,
    positionPreset = "top-right",
    size = "small",
    className = "",
    children = "",
    ...other
  } = props;

  const labelInsideStyles = indicatorLabelInsideClass(children, isLegend, size, status);
  const positionStyleFromPreset = getIndicatorPositionStyleFromPreset(positionPreset);
  const labelOutsideStyles = cn(indicatorLabelOutsideClass(size, status), className);

  const indicatorStyle: CSSProperties = {
    fontSize: children && !isLegend ? indicatorFontClass[size] || indicatorFontClass.small : undefined,
    ...positionStyleFromPreset,
    ...position,
    ...other.style,
  };

  return (
    <>
      {/* Indicator without text when isLegend is false */}
      {!isLegend && (
        <div ref={ref} className={labelInsideStyles} style={indicatorStyle} {...other}>
          {children}
        </div>
      )}

      {/* Label text outside the indicator */}
      {isLegend && (
        <div ref={ref} className={indicatorLabelOutsideContainerClass} style={{ gap: 4 }}>
          <div className={labelOutsideStyles} {...other} style={indicatorStyle}></div>
          {children}
        </div>
      )}
    </>
  );
});

Indicator.displayName = "Indicator";
