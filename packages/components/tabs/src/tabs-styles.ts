import { cn, colorClass, orientations } from "@shiperist-catppuccin-ui/utilities";

export const tabSizeClass = {
  small: "text-sm px-1",
  medium: "text-md px-2",
  large: "text-lg px-3",
};

export const tabAppearanceClass = (active: boolean, appearance: string, variant: string) => {
  return (
    {
      default: `text-surface2 ${active ? "text-text font-semibold" : "hover:text-overlay1"}`,
      underline: `text-surface2 border-transparent border-b-2 hover:border-b-2 hover:border-surface0 pb-0.5 text-center ${
        active ? "text-text border-b-2 border-surface2 hover:border-overlay0 font-semibold" : "hover:text-overlay1"
      }`,
      boxed: `bg-mantle text-surface1 rounded-md ${
        active ? `bg-${colorClass(variant)} rounded-md text-mantle font-semibold` : "hover:text-overlay1"
      }`,
      lifted: `border-b border-surface0 text-surface1 ${
        active
          ? "rounded-tr-xl rounded-tl-xl border-l border-r border-t border-surface0 border-b-0 text-text font-semibold"
          : "hover:text-overlay1"
      }`,
    }[appearance] ||
    `text-surface2 border-transparent border-b-2 hover:border-b-2 hover:border-surface0 pb-0.5 text-center ${
      active ? "text-text border-b-2 border-surface2 hover:border-overlay0 font-semibold" : "hover:text-overlay1"
    }`
  );
};

export const tabContainerClass = (
  size: string,
  appearance: string,
  active: boolean,
  variant: string,
  orientation: string
) => {
  if (orientation === "vertical" && appearance === "lifted") {
    return "";
  }
  return cn(
    "w-fit h-fit items-center cursor-pointer transition-all inline-flex",
    tabSizeClass[size] || tabSizeClass.medium,
    tabAppearanceClass(active, appearance, variant),
    {
      "px-1.5": appearance === "boxed",
      "w-full": orientation === "vertical",
      "border-b-0 border-l-2 hover:border-b-0 hover:border-l-2":
        orientation === "vertical" && appearance === "underline",
    }
  );
};

export const tabsContainerClass = (orientation: string, appearance: string) =>
  cn(orientations[orientation] || orientations.horizontal, { "rounded-md": appearance === "boxed" });
