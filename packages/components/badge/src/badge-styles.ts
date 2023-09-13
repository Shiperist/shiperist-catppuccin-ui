import { cn, getRGBAFromHex } from "@shiperist-catppuccin-ui/utilities";
export const badgeAppearanceClass = (appearance: string, colorClass: string) => {
  return (
    {
      filled: `bg-${colorClass} text-mantle`,
      outline: `border-${colorClass} text-${colorClass}`,
      ghost: `text-${colorClass}`,
      /* tint: `text-${colorClass} border border-transparent`, */
    }[appearance] || `bg-${colorClass} text-mantle`
  );
};

/* export const badgeBackgroundColor = (appearance: string, colorClass: string) =>
  appearance === "tint" ? getRGBAFromHex(colorClass) : undefined; */
export const badgeIconColor = (appearance: string, colorClass: string) =>
  appearance === "filled" ? "stroke-base" : `stroke-${colorClass}`;
export const badgeBaseClass = (appearance: string, colorClass: string) =>
  cn(
    `flex items-center rounded-full border border-transparent text-sm py-px px-1 text-xs`,
    colorClass ? `${badgeAppearanceClass(appearance, colorClass)}` : ""
  );
