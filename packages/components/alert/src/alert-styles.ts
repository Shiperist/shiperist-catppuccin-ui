import { cn, colorClass, getRGBAFromHex } from "@shiperist-catppuccin-ui/utilities";
export const alertSizeClass = {
  small: "text-sm py-1",
  medium: "text-md py-2",
  large: "text-lg py-3",
};

export const alertAppearanceClass = (appearance: string, colorClass: string) => {
  return (
    {
      outline: `text-${colorClass} border border-${colorClass}`,
      filled: `text-surface0 border border-transparent bg-${colorClass}`,
      tint: `text-${colorClass} border border-transparent`,
    }[appearance] || `text-${colorClass} border border-${colorClass}`
  );
};

export const alertIconColor = (appearance: string, colorClass: string) =>
  appearance === "filled" ? "stroke-base" : `stroke-${colorClass}`;
export const alertBackgroundColor = (appearance: string, colorClass: string) =>
  appearance === "tint" ? getRGBAFromHex(colorClass) : undefined;
export const alertBaseClass = (size: string, appearance: string, variant: string) =>
  cn(
    "flex flex-row items-center rounded-xl pl-4 pr-2 transition-all",
    alertSizeClass[size] || alertSizeClass.medium,
    alertAppearanceClass(appearance, colorClass(variant))
  );
