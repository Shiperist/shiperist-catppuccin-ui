import { cn } from "@shiperist-catppuccin-ui/utilities";

export const textAreaSizeClass = {
  small: "text-sm h-8",
  medium: "text-md h-12",
  large: "text-lg h-16",
};
export const textAreaResizeClass = {
  none: "resize-none",
  vertical: "resize-y",
  horizontal: "resize-x",
  both: "resize",
};
export const textAreaClass = (size: string, resize: string, disabled: boolean) =>
  cn(
    textAreaSizeClass[size] || textAreaSizeClass.medium,
    textAreaResizeClass[resize] || textAreaResizeClass.none,
    "bg-base border-overlay0 text-text focus:border-overlay1 hover:border-overlay1 form-control w-full appearance-none rounded-xl border px-4 pt-1 outline-none",
    {
      "cursor-not-allowed opacity-50": disabled,
    }
  );
