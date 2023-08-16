import { cn } from "@shiperist-catppuccin-ui/utilities";

export const dividerHorizontalThicknessClass = {
  tiny: "h-[1px]",
  small: "h-[2px]",
  medium: "h-[3px]",
};

export const dividerVerticalThicknessClass = {
  tiny: "w-[1px]",
  small: "w-[2px]",
  medium: "w-[3px]",
};
export const dividerExtraLabelStyle = {
  horizontal: "bg-base px-2",
  vertical: "bg-base py-2",
};

export const dividerContainerClass = (orientation: string, thickness: string) =>
  cn("bg-overlay2 relative my-1", {
    [dividerHorizontalThicknessClass[thickness] || dividerHorizontalThicknessClass.tiny + "w-full my-1"]:
      orientation === "horizontal",
    [dividerVerticalThicknessClass[thickness] || dividerVerticalThicknessClass.tiny + " mx-1"]:
      orientation === "vertical",
  });
export const dividerLabelClass = (labelPosition: string, orientation: string) =>
  cn("absolute flex h-full items-center", {
    "flex-start": labelPosition === "left" && orientation !== "vertical",
    "flex-end": labelPosition === "right" && orientation !== "vertical",
    "left-1/2 -translate-x-1/2": labelPosition === "center",
    "left-auto right-8": labelPosition === "right",
    "left-8": labelPosition !== "right" && labelPosition !== "center",
    "right-auto": labelPosition !== "right",
  });
