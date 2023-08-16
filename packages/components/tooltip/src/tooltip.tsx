import React, { useState, useRef, useEffect } from "react";
import { TooltipProps } from "."; // Import your TooltipProps type
import { cn } from "@shiperist-catppuccin-ui/utilities";
import { tooltipClass } from "./tooltip-styles";

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

  const calculatePosition = () => {
    if (!tooltipRef.current || !targetRef.current) return;

    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const targetRect = targetRef.current.getBoundingClientRect();

    const newPositionStyle: React.CSSProperties = {};

    switch (position) {
      case "top":
        newPositionStyle.bottom = `${targetRect.height + 8}px`;
        newPositionStyle.left = `calc(50% - ${tooltipRect.width / 2}px)`;
        break;
      case "bottom":
        newPositionStyle.top = `${targetRect.height + 8}px`;
        newPositionStyle.left = `calc(50% - ${tooltipRect.width / 2}px)`;
        break;
      case "left":
        newPositionStyle.right = `${targetRect.width + 8}px`;
        newPositionStyle.top = `calc(50% - ${tooltipRect.height / 2}px)`;
        break;
      case "right":
        newPositionStyle.left = `${targetRect.width + 8}px`;
        newPositionStyle.top = `calc(50% - ${tooltipRect.height / 2}px)`;
        break;
      default:
        break;
    }

    return newPositionStyle;
  };

  useEffect(() => {
    if (isShown && tooltipRef.current && targetRef.current) {
      const newPositionStyle = calculatePosition();
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
