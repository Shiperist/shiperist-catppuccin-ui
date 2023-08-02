import React, { InputHTMLAttributes, useState, useEffect, useRef } from "react";
import { cn, colors, ColorVariants } from "@shiperist-catppuccin-ui/utilities";

export interface RangeProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  disabled?: boolean;
  variant?: ColorVariants;
  appearance?: "filled" | "outline";
  tooltip?: boolean;
  defaultValue?: number;
  marks?: boolean;
  min?: number;
  max?: number;
  step?: number;
  track?: boolean;
  size?: "small" | "medium" | "large";
}

const Range = React.memo(
  React.forwardRef<HTMLInputElement, RangeProps>((props, ref) => {
    const {
      disabled,
      variant = "base",
      appearance = "outline",
      size = "medium",
      defaultValue,
      tooltip = false,
      marks = false,
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
    const colorClass = colors[variant] || colors.base;

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
          const newValue =
            (clickPosition / sliderRect.width) * (max - min) + min;
          setValue(
            Math.min(max, Math.max(min, Math.round(newValue / step) * step))
          );
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
          const reactMouseEvent = event as unknown as React.MouseEvent<
            HTMLDivElement,
            MouseEvent
          >;
          animationFrameId = requestAnimationFrame(() =>
            handleTrackClick(reactMouseEvent)
          );
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

    const appearanceClass =
      {
        filled: `bg-${colorClass}`,
        outline: "bg-base",
      }[appearance] || "bg-base";
    const sizeClass =
      {
        small: "h-1",
        medium: "h-2",
        large: "h-3",
      }[size] || "h-2";
    const thumbSize =
      {
        small: "w-4 h-4",
        medium: "w-5 h-5",
        large: "w-6 h-6",
      }[size] || "w-5 h-5";
    const sizePosition = {
      small: `calc(50% + 4.5px)`,
      medium: `calc(50% + 2.5px)`,
      large: `calc(50% - -0.5px)`,
    }[size];
    const thumbStyles = {
      left: `${value}%`,
      top: sizePosition,
      transform: "translate(-50%, -50%)",
    };
    const trackStyles = {
      width: `${value}%`,
      top: sizePosition,
      transform: "translateY(-50%)",
    };
    const tooltipPosition = {
      small: "bottom-1",
      medium: "bottom-2",
      large: "bottom-3",
    }[size];
    const markSize = {
      small: "w-0.5 h-0.5",
      medium: "w-1 h-1",
      large: "w-0.5 h-2",
    }[size];

    const handleMouseEnter = () => {
      setShowTooltip(true);
    };

    const handleMouseLeave = () => {
      setShowTooltip(false);
    };

    const selectedMarkColor = `bg-white`;
    const unselectedMarkColor = `bg-${colorClass}`;

    const markSymbols = [];
    for (let i = min; i <= max; i += step) {
      const markColor = i <= value ? selectedMarkColor : unselectedMarkColor;
      const isFirstMark = i === min;
      const isLastMark = i === max;

      if (markSymbols.length <= 30) {
        markSymbols.push(
          <div
            key={i}
            className={cn(`absolute rounded`, markColor, markSize, {
              "opacity-0": isFirstMark || isLastMark,
            })}
            style={{
              left: `${((i - min) / (max - min)) * 100}%`,
              top: sizePosition,
              transform: "translate(-50%, -50%)",
            }}
          />
        );
      }
    }

    const tooltipStyle = {
      width: "32px",
      display: showTooltip ? "flex" : "none",
      left: `calc(${value}% + (${8 - value * 0.15}px))`,
      transform: "translate(-50%, -100%)",
    };

    return (
      <div className="flex w-full items-center">
        <div
          className={cn("relative w-full transition-all", {
            "pointer-not-allowed opacity-50": disabled,
          })}
          ref={sliderRef}
        >
          <input
            ref={ref}
            type="range"
            value={value}
            max={max}
            min={min}
            step={step}
            className={cn(
              "bg-surface2 w-full cursor-pointer appearance-none rounded-lg transition-all",
              sizeClass,
              {
                "cursor-not-allowed": disabled,
              }
            )}
            onChange={disabled ? undefined : handleChange}
            disabled={disabled}
            {...other}
          />
          {/* Thumb */}
          <div
            className={cn(
              `absolute z-10 ${appearanceClass} cursor-pointer rounded-full border-2`,
              { "cursor-not-allowed": disabled },
              thumbSize
            )}
            style={thumbStyles}
            onMouseDown={disabled ? undefined : handleMouseDown}
            onMouseUp={disabled ? undefined : handleMouseUp}
            onMouseEnter={disabled ? undefined : handleMouseEnter}
            onMouseLeave={disabled ? undefined : handleMouseLeave}
          />
          {/* Track */}
          {track && (
            <div
              className={cn(
                `absolute cursor-pointer rounded-lg bg-${colorClass}`,
                sizeClass,
                {
                  "cursor-not-allowed": disabled,
                }
              )}
              onMouseDown={disabled ? undefined : handleMouseDownTrack}
              style={trackStyles}
            />
          )}
          {marks && markSymbols}
        </div>
        {/* Tooltip */}
        {tooltip && (
          <div
            className={cn(
              "bg-mantle absolute flex w-4 justify-center rounded px-2 py-1 text-xs text-white",
              {
                "pointer-events-none opacity-0": !showTooltip,
                "pointer-events-auto opacity-100": showTooltip,
              },
              tooltipPosition
            )}
            style={tooltipStyle}
          >
            {Math.round(value)}
          </div>
        )}
      </div>
    );
  })
);

Range.displayName = "Range";

export default Range;
