import { cn } from "@shiperist-catppuccin-ui/utilities";

export const selectInputContainerClass = (disabled: boolean, showRingEffect: boolean) =>
  cn(
    "border-overlay0 flex h-12 w-full flex-row items-center rounded-xl border px-4 py-2 transition duration-150 ease-in-out",
    {
      "cursor-not-allowed opacity-50": disabled,
      "hover:border-overlay2": !disabled,
      "ring-overlay2 ring": showRingEffect,
    }
  );
export const selectInputStyles = cn("w-full flex-grow bg-transparent outline-none");
export const selectButtonContainerClass = (disabled: boolean, showRingEffect: boolean) =>
  cn(
    "border-overlay0 flex h-12 w-full flex-row items-center rounded-xl border px-4 py-2 transition duration-150 ease-in-out",
    {
      "cursor-not-allowed opacity-50": disabled,
      "hover:border-overlay2": !disabled,
      "ring-overlay2 ring": showRingEffect,
    }
  );
export const selectResultClass = (filteredChildren: React.ReactElement[]) =>
  cn("absolute z-50 mt-2 flex max-h-[250px] w-full flex-col overflow-y-auto rounded-xl", {
    "border-overlay0 border": filteredChildren.length > 0,
    "border-none border-transparent": filteredChildren.length === 0,
  });
