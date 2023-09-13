import { cn } from "@shiperist-catppuccin-ui/utilities";

export const progressShapeClass = {
  circular: "rounded-full",
  square: "rounded-none",
};
export const progressTextSizeClass = {
  small: "text-xs",
  medium: "text-sm",
  large: "text-sm",
  xlarge: "text-md",
};

export const progressThicknessClass = {
  small: "h-1.5",
  medium: "h-2.5",
  large: "h-3.5",
  xlarge: "h-4",
};
export const progressContainerClass = (thickness: string) =>
  cn(
    "flex w-full flex-row items-center transition-all duration-150",
    progressThicknessClass[thickness] || progressThicknessClass.medium
  );
export const progressMainBarClass = (shape: string, thickness: string) =>
  cn(
    "bg-overlay0 w-full items-center transition-all duration-150",
    progressShapeClass[shape] || progressShapeClass.circular,
    progressThicknessClass[thickness] || progressThicknessClass.medium
  );
export const progressClass = (colorClass: string, shape: string) =>
  cn(`h-full transition-all duration-150 bg-${colorClass}`, progressShapeClass[shape] || progressShapeClass.circular);
export const progressLabelStyles = (percentBoundary: string, percentPosition: string) =>
  percentBoundary === "inside"
    ? {
        justifyContent: percentPosition,
        alignItems: percentPosition,
        display: "flex",
      }
    : { alignItems: "center", display: "flex" };
