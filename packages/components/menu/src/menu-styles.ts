import { cn } from "@shiperist-catppuccin-ui/utilities";

export const menuSizeClass = {
  small: "text-sm h-7",
  medium: "text-md h-8",
  large: "text-lg h-9",
};

export const menuResultSizeClass = {
  small: "min-w-32",
  medium: "min-w-48",
  large: "min-w-64",
};

export const menuContainerClass = (disabled: boolean, size: string, isOpen: boolean) =>
  cn(
    "flex border-overlay0 w-full flex-row items-center px-4 transition-all cursor-pointer duration-150 ease-in-out",
    menuSizeClass[size] || menuSizeClass.medium,
    {
      "cursor-not-allowed opacity-50": disabled,
      "hover:border-overlay2": !disabled,
      "outline-none border-l border-r border-t rounded-tr-xl rounded-tl-xl": isOpen,
      "border rounded-xl border-b": !isOpen,
    }
  );
export const menuResultClass = (filteredChildren: React.ReactElement[], size: string) =>
  cn(
    "absolute z-50 flex max-h-[250px] w-full py-1 flex-col overflow-y-auto rounded-bl-xl rounded-br-xl rounded-tr-xl max-w-[300px]",
    menuResultSizeClass[size] || menuResultSizeClass.medium,
    {
      "border-overlay0 border": filteredChildren.length > 0,
      "border-none border-transparent": filteredChildren.length === 0,
    }
  );
export const menuStyles = cn("w-full flex-grow bg-transparent outline-none flex justify-center items-center");
export const menuItemClass = (disabled: boolean, size: string) =>
  cn(
    "bg-base text-text flex w-full cursor-pointer max-w-full items-center px-4 text-left transition duration-150 ease-in-out",
    menuSizeClass[size] || menuSizeClass.medium,
    {
      "cursor-not-allowed opacity-50": disabled,
      "hover:bg-surface0": !disabled,
    }
  );
export const menuItemHeaderClass = () => cn("cursor-text font-bold text-sm w-full text-overlay2 px-3");
