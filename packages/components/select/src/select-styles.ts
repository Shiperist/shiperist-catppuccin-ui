import { cn } from "@shiperist-catppuccin-ui/utilities";

export const selectSizeClass = {
  small: "text-sm h-7",
  medium: "text-md h-8",
  large: "text-lg h-9",
};

export const selectContainerClass = (disabled: boolean, showRingEffect: boolean, size: string, isOpen: boolean) =>
  cn(
    "flex border-overlay0 w-full flex-row items-center px-4 transition-all duration-150 ease-in-out",
    selectSizeClass[size] || selectSizeClass.medium,
    {
      "cursor-not-allowed opacity-50": disabled,
      "hover:border-overlay2": !disabled,
      "ring-overlay2 ring": showRingEffect,
      "outline-none border-l border-r border-t rounded-tr-xl rounded-tl-xl border-b": isOpen,
      "border rounded-xl": !isOpen,
    }
  );
export const selectInputStyles = cn("w-full flex-grow bg-transparent outline-none");
export const selectResultClass = (filteredChildren: React.ReactElement[]) =>
  cn("absolute z-50  flex max-h-[250px] w-full py-1 flex-col overflow-y-auto rounded-bl-xl rounded-br-xl", {
    "border-overlay0 border-l border-b border-r": filteredChildren.length > 0,
    "border-none border-transparent": filteredChildren.length === 0,
  });

export const selectItemClass = (disabled: boolean, size: string) =>
  cn(
    "bg-base text-text flex w-full cursor-pointer max-w-full items-center pl-4 pr-2 text-left transition duration-150 ease-in-out",
    selectSizeClass[size] || selectSizeClass.medium,
    {
      "cursor-not-allowed opacity-50": disabled,
      "hover:bg-surface0": !disabled,
    }
  );
export const selectItemHeaderClass = () => cn("cursor-text font-bold text-sm px-3 text-overlay2");
