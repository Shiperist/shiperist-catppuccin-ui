import { cn } from "@shiperist-catppuccin-ui/utilities";

export const checkboxSizeClass = {
  small: "w-3 h-3",
  medium: "w-4 h-4",
  large: "w-5 h-5",
};
export const checkboxBaseClass = (disabled: boolean) =>
  cn("group relative inline-flex cursor-pointer items-center", {
    "cursor-not-allowed opacity-50": disabled,
  });

export const checkboxBaseStyle = (colorClass: string, disabled: boolean, size: string) =>
  cn(
    `border-overlay0 bg-mantle border justify-center items-center flex transition-all peer-checked:border`,
    `peer-checked:bg-${colorClass} peer-checked:border-${colorClass}`,
    checkboxSizeClass[size] || checkboxSizeClass.medium,
    {
      "group-hover:border-overlay2 active:translate-y-0.5": !disabled,
      "peer-checked:bg-surface2 peer-checked:border-surface2": disabled,
    }
  );
export const checkboxIconClass = (disabled: boolean) =>
  cn(`stroke-surface1 h-4 w-4 transition-all delay-200`, { "stroke-overlay1": disabled });
