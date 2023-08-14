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
        newPositionStyle.bottom = `${targetRect.height + 16}px`;
        newPositionStyle.left = `${(targetRect.width - tooltipRect.width) / 10}px`;
        break;
      case "bottom":
        newPositionStyle.top = `${targetRect.height + 16}px`;
        newPositionStyle.left = `${(targetRect.width - tooltipRect.width) / 10}px`;
        break;
      case "left":
        newPositionStyle.right = `${targetRect.width + 16}px`;
        newPositionStyle.top = `${targetRect.height - tooltipRect.height}px`;
        break;
      case "right":
        newPositionStyle.left = `${targetRect.width + 16}px`;
        newPositionStyle.top = `${targetRect.height - tooltipRect.height}px`;
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
    <div className="">
      <div ref={targetRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
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
    </div>
  );
};

Tooltip.displayName = "Tooltip";
