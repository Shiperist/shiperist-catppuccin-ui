import { cn } from "@shiperist-catppuccin-ui/utilities";

export const kbdSizeClass = {
  small: "text-xs px-2 py-1",
  medium: "text-sm px-3 py-1.5",
  large: "text-md px-4 py-2",
};

export const kbdAppearanceClass = {
  filled: "bg-mantle border border-surface1 text-text border-b-2",
  ghost: "bg-transparent text-text",
};

export const kbdContainerClass = (size: string, appearance: string) =>
  cn(
    "rounded-xl w-fit h-fit flex items-center justify-center mx-1.5",
    kbdSizeClass[size] || kbdSizeClass.medium,
    kbdAppearanceClass[appearance] || kbdAppearanceClass.filled
  );
