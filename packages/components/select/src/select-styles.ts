import { cn } from "@shiperist-catppuccin-ui/utilities";

export const selectSizeClass = {
  small: "h-7",
  medium: "h-8",
  large: "h-9",
};

export const selectInputContainerClass = (disabled: boolean, showRingEffect: boolean, size: string) =>
  cn(
    "border-overlay0 flex w-full flex-row items-center rounded-xl border px-4 transition duration-150 ease-in-out",
    {
      "cursor-not-allowed opacity-50": disabled,
      "hover:border-overlay2": !disabled,
      "ring-overlay2 ring": showRingEffect,
    },
    selectSizeClass[size] || selectSizeClass.medium
  );
export const selectInputStyles = cn("w-full flex-grow bg-transparent outline-none");
export const selectButtonContainerClass = (disabled: boolean, showRingEffect: boolean, size: string) =>
  cn(
    "border-overlay0 flex w-full flex-row items-center rounded-xl border px-4 transition duration-150 ease-in-out",
    {
      "cursor-not-allowed opacity-50": disabled,
      "hover:border-overlay2": !disabled,
      "ring-overlay2 ring": showRingEffect,
    },
    selectSizeClass[size] || selectSizeClass.medium
  );
export const selectResultClass = (filteredChildren: React.ReactElement[]) =>
  cn("absolute z-50 mt-2 flex max-h-[250px] w-full py-1 flex-col overflow-y-auto rounded-xl", {
    "border-overlay0 border": filteredChildren.length > 0,
    "border-none border-transparent": filteredChildren.length === 0,
  });

export const selectItemClass = (disabled: boolean, size: string) =>
  cn(
    "bg-base text-text flex w-full max-w-full items-center px-4 text-left transition duration-150 ease-in-out",
    {
      "cursor-not-allowed opacity-50": disabled,
      "hover:bg-surface1": !disabled,
    },
    selectSizeClass[size] || selectSizeClass.medium
  );
