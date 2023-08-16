import { cn, getRGBAFromHex } from "@shiperist-catppuccin-ui/utilities";
export const badgeAppearanceClass = (appearance: string, colorClass: string) => {
  return (
    {
      filled: `bg-${colorClass} text-mantle border border-transparent`,
      outline: `border border-${colorClass} text-${colorClass}`,
      ghost: `text-${colorClass} border border-transparent`,
      /* tint: `text-${colorClass} border border-transparent`, */
    }[appearance] || `bg-${colorClass} text-mantle border border-transparent`
  );
};

export const badgeBackgroundColor = (appearance: string, colorClass: string) =>
  appearance === "tint" ? getRGBAFromHex(colorClass) : undefined;
export const badgeIconColor = (appearance: string, colorClass: string) =>
  appearance === "filled" ? "stroke-base" : `stroke-${colorClass}`;
export const badgeBaseClass = (appearance: string, colorClass: string) =>
  cn(
    `flex items-center rounded-full text-sm py-px px-1`,
    colorClass ? `${badgeAppearanceClass(appearance, colorClass)}` : ""
  );
