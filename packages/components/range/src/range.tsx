import React, { useState, useEffect, useRef } from "react";
import { colorClass } from "@shiperist-catppuccin-ui/utilities";
import {
  RangeProps,
  rangeClass,
  rangeContainerClass,
  rangeMainContainerClass,
  rangeMarkClass,
  rangeSizePosition,
  rangeThumbClass,
  rangeThumbStyles,
  rangeTooltipClass,
  rangeTooltipStyle,
  rangeTrackClass,
  rangeTrackStyles,
} from ".";

export const Range = React.forwardRef<HTMLInputElement, RangeProps>((props, ref) => {
  const {
    disabled,
    variant = "base",
    appearance = "outline",
    size = "medium",
    defaultValue,
    tooltip,
    marks,
    min = 0,
    max = 100,
    step = 1,
    track = true,
    className = "",
    ...other
  } = props;

  const [value, setValue] = useState<number>(defaultValue || 0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const trackWidth = ((value - min) / (max - min)) * 100;
  const thumbPosition = `calc(${trackWidth}% + (${value === min ? 0 : value === max ? "-1" : "-0.5"}px))`;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTrackClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!disabled) {
      const sliderRect = sliderRef.current?.getBoundingClientRect();
      if (sliderRect) {
        const clickPosition = event.clientX - sliderRect.left;
        const newValue = (clickPosition / sliderRect.width) * (max - min) + min;
        setValue(Math.min(max, Math.max(min, Math.round(newValue / step) * step)));
      }
    }
  };

  const handleMouseDownTrack = (event: React.MouseEvent<HTMLDivElement>) => {
    handleTrackClick(event);
    setIsDragging(true);
  };

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMoveDuringTrackDrag = (event: MouseEvent) => {
      if (isDragging) {
        const reactMouseEvent = event as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>;
        animationFrameId = requestAnimationFrame(() => handleTrackClick(reactMouseEvent));
      }
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMoveDuringTrackDrag);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMoveDuringTrackDrag);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDragging]);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const mainContainerStyles = rangeMainContainerClass(disabled);
  const rangeStyles = rangeClass(disabled, size);
  const thumbStyles = rangeThumbClass(disabled, appearance, variant, size);
  const trackStyles = rangeTrackClass(disabled, colorClass(variant), size);
  const tooltipStyles = rangeTooltipClass(showTooltip, size);

  const markSymbols = [];
  const totalSteps = Math.ceil((max - min) / step);

  for (let i = min; i <= max; i += step) {
    if (markSymbols.length < 30) {
      const markColor = i <= value ? `bg-white` : `bg-${colorClass(variant)}`;
      const isFirstMark = i === min;
      const isLastMark = i === max;
      const rangeMarkStyles = rangeMarkClass(isFirstMark, isLastMark, size, markColor);

      markSymbols.push(
        <div
          key={i}
          className={rangeMarkStyles}
          style={{
            display: markSymbols.length && totalSteps > 30 ? "none" : "block",
            left: `${((i - min) / (max - min)) * 100}%`,
            top: rangeSizePosition[size] || rangeSizePosition.medium,
            transform: "translate(-50%, -50%)",
          }}
        />
      );
    }
  }

  return (
    <div className={rangeContainerClass}>
      <div className={mainContainerStyles} ref={sliderRef}>
        <input
          ref={ref}
          type="range"
          value={value}
          max={max}
          min={min}
          step={step}
          className={rangeStyles}
          onChange={disabled ? undefined : handleChange}
          disabled={disabled}
          {...other}
        />
        {/* Thumb */}
        <div
          className={thumbStyles}
          style={rangeThumbStyles(thumbPosition, rangeSizePosition[size] || rangeSizePosition.medium)}
          onMouseDown={disabled ? undefined : handleMouseDown}
          onMouseUp={disabled ? undefined : handleMouseUp}
          onMouseEnter={disabled ? undefined : handleMouseEnter}
          onMouseLeave={disabled ? undefined : handleMouseLeave}></div>
        {/* Track */}
        {track && (
          <div
            className={trackStyles}
            onMouseDown={disabled ? undefined : handleMouseDownTrack}
            style={rangeTrackStyles(trackWidth, rangeSizePosition[size] || rangeSizePosition.medium)}
          />
        )}
        {marks && markSymbols}
      </div>
      {/* Tooltip */}
      {tooltip && (
        <div className={tooltipStyles} style={rangeTooltipStyle(showTooltip, trackWidth)}>
          {Math.round(value)}
        </div>
      )}
    </div>
  );
});

Range.displayName = "Range";
