import React, { useState, useRef, useEffect } from "react";
import { TooltipProps, tooltipClass, calculatePosition } from ".";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export const Tooltip = (props: TooltipProps) => {
  const {
    className = "",
    children,
    text,
    visible,
    showDelay = 250,
    hideDelay = 250,
    position = "top",
    ...other
  } = props;

  const [isShown, setIsShown] = useState(visible || false);
  const [showTimeout, setShowTimeout] = useState<number | null>(null);

  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isShown && tooltipRef.current && targetRef.current) {
      const newPositionStyle = calculatePosition(tooltipRef, targetRef, position);
      Object.assign(tooltipRef.current.style, newPositionStyle);
    }
  }, [isShown, position]);

  const handleMouseEnter = () => {
    if (showTimeout) {
      clearTimeout(showTimeout);
    }
    const timeout = window.setTimeout(() => {
      setIsShown(visible || true);
    }, showDelay);
    setShowTimeout(timeout);
  };

  const handleMouseLeave = () => {
    if (showTimeout) {
      clearTimeout(showTimeout);
    }
    window.setTimeout(() => {
      setIsShown(visible || false);
    }, hideDelay);
  };

  const tooltipContainerStyles = cn(tooltipClass, className);

  return (
    <div ref={targetRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isShown && (
        <div
          ref={tooltipRef}
          className={tooltipContainerStyles}
          style={{
            ...other.style,
          }}>
          {text}
        </div>
      )}
      {children}
    </div>
  );
};

Tooltip.displayName = "Tooltip";
