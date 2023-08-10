import { cn, colorClass, getRGBAFromHex } from "@shiperist-catppuccin-ui/utilities";

export const buttonBackgroundColor = (colorClass: string, appearance: string) =>
  appearance === "tint" ? getRGBAFromHex(colorClass) : undefined;
export const buttonIconSizeClass = {
  small: "w-4 h-4",
  medium: "w-5 h-5",
  large: "w-6 h-6",
  xlarge: "h-7 w-7",
};
export const buttonSizeClass = (size: string, isOnlyIcon: boolean) => {
  return (
    {
      small: `text-sm ${isOnlyIcon ? "p-1.5" : "px-2 py-1"}`,
      medium: `text-md ${isOnlyIcon ? "p-2.5" : "px-3 py-2"}`,
      large: `text-lg ${isOnlyIcon ? "p-3.5" : "px-4 py-3"}`,
      xlarge: `text-xl ${isOnlyIcon ? "p-4.5" : "px-5 py-4"}`,
    }[size] || `${isOnlyIcon ? "p-2.5" : "px-3 py-2"}`
  );
};
export const buttonAppearanceClass = (colorClass: string, appearance: string) => {
  return (
    {
      /* filled: `bg-${colorClass} text-mantle hover:opacity-80 border border-transparent`, */
      outline: `border border-${colorClass} text-${colorClass} hover:text-mantle hover:bg-${colorClass}`,
      ghost: `text-${colorClass} hover:bg-surface1 hover:text-${colorClass} border border-transparent`,
      tint: `text-${colorClass} hover:opacity-80 border border-transparent`,
      shadow: `text-${colorClass} bg-mantle shadow-lg hover:bg-crust border border-transparent`,
    }[appearance] || `border border-${colorClass} text-${colorClass} hover:text-mantle hover:bg-${colorClass}`
  );
};
export const buttonIconColor = (colorClass: string, appearance: string) => {
  return {
    /* filled: `group-hover:stroke-base stroke-base`, */
    outline: `group-hover:stroke-base stroke-${colorClass}`,
    ghost: `group-hover:stroke-${colorClass} stroke-${colorClass}`,
    tint: ` stroke-${colorClass}`,
    shadow: `group-hover:stroke-${colorClass} stroke-${colorClass}`,
  }[appearance];
};
export const buttonShapeClass = {
  rounded: "rounded-xl",
  circular: "rounded-full",
  square: "rounded-none",
};
export const buttonBaseClass = (
  disabled: boolean,
  appearance: string,
  variant: string,
  shape: string,
  size: string,
  isOnlyIcon: boolean
) =>
  cn(
    "text-text group flex h-fit w-fit items-center justify-center transition-all",
    buttonShapeClass[shape] || buttonShapeClass.rounded,
    buttonSizeClass(size, isOnlyIcon),
    {
      ["cursor-not-allowed opacity-50"]: disabled,
      ["bg-surface0"]: disabled && appearance === "shadow",
      ["border-surface2 border"]: disabled && appearance === "outline",
      ["border border-transparent"]: disabled && appearance !== "outline",
      [`${buttonAppearanceClass(colorClass(variant), appearance)} active:translate-y-0.5`]: !disabled,
    }
  );
