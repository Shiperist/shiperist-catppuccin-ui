import { cn, colorClass, orientations } from "@shiperist-catppuccin-ui/utilities";

export const cardAppearanceClass = (colorClass: string, appearance: string) => {
  return (
    {
      filled: `bg-mantle`,
      outline: `border-overlay0 border-2`,
      shadow: "bg-mantle shadow-lg",
      embed: `border-${colorClass} bg-mantle border-l-4`,
    }[appearance] || "border-overlay0 border-2"
  );
};

export const cardBaseClass = (disabled: boolean, variant: string, appearance: string, orientation: string) =>
  cn(
    "flex w-full rounded-xl border border-transparent p-4",
    cardAppearanceClass(colorClass(variant), appearance),
    orientations[orientation] || orientations.vertical,
    {
      "cursor-not-allowed opacity-50": disabled,
    }
  );
