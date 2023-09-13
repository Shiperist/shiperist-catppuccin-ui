import { cn } from "@shiperist-catppuccin-ui/utilities";

export const switchSizeClass = {
  small: 4,
  medium: 5,
  large: 6,
};

export const switchWidthOffset = {
  small: 3,
  medium: 4,
  large: 5,
};
export const containerClass = (disabled: boolean) =>
  cn(`relative inline-flex items-center`, {
    "cursor-not-allowed opacity-50": disabled,
    "cursor-pointer": !disabled,
  });
export const switchClass = (size: string, appearance: string, colorClass: string, disabled: boolean) => {
  return cn(
    `bg-mantle after:bg-overlay0 rounded-full transition-all after:absolute after:left-[1.5px] after:top-1/2 after:-translate-y-1/2 after:rounded-full after:content-[''] peer-checked:border peer-checked:after:translate-x-full after:h-${
      switchSizeClass[size] - 1 || switchSizeClass.medium - 1
    } after:w-${switchSizeClass[size] - 1 || switchSizeClass.medium - 1} after:transition-all after:duration-300`,
    "h-" + switchSizeClass[size],
    `w-${(switchSizeClass[size] || switchSizeClass.medium) + (switchWidthOffset[size] || switchWidthOffset.medium)}`,
    appearance === "alternative"
      ? `peer-checked:border-${colorClass} peer-checked:after:bg-${colorClass} after:items-center`
      : `peer-checked:bg-${colorClass} peer-checked:after:bg-white`,
    { "peer-checked:after:bg-surface2 peer-checked:border-surface2": disabled }
  );
};
