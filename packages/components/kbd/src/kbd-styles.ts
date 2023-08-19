import { cn } from "@shiperist-catppuccin-ui/utilities";

export const kbdSizeClass = {
  small: "text-xs px-2 py-1",
  medium: "text-sm px-3 py-1.5",
  large: "text-md px-4 py-2",
};

export const kbdAppearanceClass = {
  filled: "bg-mantle border-surface1 border-b-2",
  ghost: "bg-transparent",
  outline: "border-surface1 border-b-2",
};

export const kbdContainerClass = (size: string, appearance: string) =>
  cn(
    "rounded-xl border text-text border-transparent w-fit h-fit flex items-center justify-center mx-1.5",
    kbdSizeClass[size] || kbdSizeClass.medium,
    kbdAppearanceClass[appearance] || kbdAppearanceClass.filled
  );
