import { cn, colorClass } from "@shiperist-catppuccin-ui/utilities";

export const rangeAppearanceClass = (colorClass: string, appearance: string) => {
  return (
    {
      filled: `bg-${colorClass} border border-base`,
      outline: "bg-base border-4",
    }[appearance] || "bg-base border-4"
  );
};
export const rangeSizeClass = {
  small: "h-1",
  medium: "h-2",
  large: "h-3",
};
export const rangeThumbSize = {
  small: "w-4 h-4",
  medium: "w-5 h-5",
  large: "w-6 h-6",
};
export const rangeSizePosition = {
  small: `calc(50% + 4.5px)`,
  medium: `calc(50% + 2.5px)`,
  large: `calc(50% - -0.5px)`,
};
export const rangeThumbStyles = (thumbPosition: string, sizePosition: string) => {
  return {
    left: thumbPosition,
    top: sizePosition,
    transform: "translate(-50%, -50%)",
  };
};
export const rangeTrackStyles = (trackWidth: number, sizePosition: string) => {
  return {
    width: `${trackWidth}%`,
    top: sizePosition,
    transform: "translateY(-50%)",
  };
};
export const rangeTooltipPosition = {
  small: "bottom-1",
  medium: "bottom-2",
  large: "bottom-3",
};
export const rangeMarkSize = {
  small: "w-0.5 h-0.5",
  medium: "w-1 h-1",
  large: "w-0.5 h-2",
};
export const rangeTooltipStyle = (showTooltip: boolean, trackWidth: number) => {
  return {
    width: "32px",
    display: showTooltip ? "flex" : "none",
    left: `calc(${trackWidth}% + (${8 - trackWidth * 0.15}px))`,
    transform: "translate(-50%, -100%)",
  };
};
export const rangeContainerClass = cn("flex w-full items-center");
export const rangeMainContainerClass = (disabled: boolean) =>
  cn("relative w-full transition-all", {
    "pointer-not-allowed opacity-50": disabled,
  });
export const rangeClass = (disabled: boolean, size: string) =>
  cn(
    "bg-surface2 w-full cursor-pointer appearance-none rounded-lg transition-all",
    rangeSizeClass[size] || rangeSizeClass.medium,
    {
      "cursor-not-allowed": disabled,
    }
  );
export const rangeThumbClass = (disabled: boolean, appearance: string, variant: string, size: string) =>
  cn(
    `absolute z-10 ${rangeAppearanceClass(colorClass(variant), appearance)} cursor-pointer rounded-full`,
    rangeThumbSize[size] || rangeThumbSize.medium,
    {
      "border-overlay1 cursor-not-allowed": disabled && appearance !== "filled",
      "bg-overlay0": disabled && appearance === "filled",
    }
  );
export const rangeTrackClass = (disabled: boolean, colorClass: string, size: string) =>
  cn(`absolute cursor-pointer rounded-lg bg-${colorClass}`, rangeSizeClass[size] || rangeSizeClass.medium, {
    "bg-surface1 cursor-not-allowed": disabled,
  });
export const rangeTooltipClass = (showTooltip: boolean, size: string) =>
  cn(
    "bg-mantle absolute flex w-4 justify-center rounded px-2 py-1 text-xs text-white",
    rangeTooltipPosition[size] || rangeTooltipPosition.medium,
    {
      "pointer-events-none opacity-0": !showTooltip,
      "pointer-events-auto opacity-100": showTooltip,
    }
  );
export const rangeMarkClass = (isFirstMark: boolean, isLastMark: boolean, size: string, markColor: string) =>
  cn(`absolute rounded`, rangeMarkSize[size] || rangeMarkSize.medium, markColor, {
    "opacity-0": isFirstMark || isLastMark,
  });
