import { cn } from "@shiperist-catppuccin-ui/utilities";

export const textInputAppearance = {
  outline: "ring-0 border rounded-xl",
  underline: "ring-0 border-b",
  filled: "ring-0 border-b rounded-xl bg-surface0",
};
export const textInputSizeClass = {
  small: "text-xs h-7",
  medium: "text-sm h-8",
  large: "text-md h-9",
};
export const textInputIconSizeClass = {
  small: "w-4 h-4",
  medium: "w-5 h-5",
  large: "w-6 h-6",
  xlarge: "h-7 w-7",
};
export const textInputContainerClass = "relative flex flex-col transition";
export const textInputOverlayClass = (
  size: string,
  disabled: boolean,
  error: boolean,
  isInputFocused: boolean,
  appearance: string
) =>
  cn(
    "flex h-full w-full flex-row items-center px-4 transition-all duration-150 ease-in-out",
    textInputSizeClass[size] || textInputSizeClass.medium,
    textInputAppearance[appearance] || textInputAppearance.outline,
    {
      "cursor-not-allowed opacity-50": disabled,
      "hover:border-overlay2 focus:border-overlay2": !disabled && !isInputFocused && !error,
      "border-red": error,
      "border-overlay0": !error,
      "border-overlay2": isInputFocused && !error,
    }
  );
export const textInputClass = (disabled: boolean, error: boolean) =>
  cn(`mx-1 flex-grow bg-transparent outline-none`, {
    "cursor-not-allowed": disabled,
    "text-red": error,
    "text-text": !error,
  });
export const textInputLabelAppearanceBorderClass = (label: string, labelStyle: string) =>
  label && labelStyle && cn("z-10 left-2 -top-3 bg-base absolute cursor-text px-2");
