import { cn } from "@shiperist-catppuccin-ui/utilities";

export const radioSizeClass = {
  small: "w-4 h-4",
  medium: "w-5 h-5",
  large: "w-6 h-6",
};
export const radioSizeCheckedClass = {
  small: "before:w-3 before:h-3 after:w-3 after:h-3 checked:after:h-1.5 checked:after:w-1.5",
  medium: "before:w-4 before:h-4 after:w-4 after:h-4 checked:after:h-2.5 checked:after:w-2.5",
  large: "before:w-5 before:h-5 after:w-5 after:h-5 checked:after:h-3.5 checked:after:w-3.5",
};
export const radioClass = (disabled: boolean, colorClass: string, size: string) =>
  cn(
    {
      "checked:border-surface2 checked:after:border-surface2 checked:after:bg-surface2 checked:focus:border-surface2 border-surface0":
        disabled,
    },
    `relative float-left appearance-none rounded-full border-2 before:pointer-events-none before:absolute before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:content-[''] after:absolute after:z-[1] after:block after:rounded-full after:content-[''] checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:rounded-full checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] checked:focus:before:scale-100 checked:border-${colorClass} checked:after:border-${colorClass} checked:after:bg-${colorClass} checked:focus:border-${colorClass} border-surface0`,
    radioSizeClass[size] || radioSizeClass.medium,
    radioSizeCheckedClass[size] || radioSizeCheckedClass.medium
  );
export const radioContainerClass = (disabled: boolean) =>
  cn("relative inline-flex items-center", {
    "cursor-not-allowed opacity-50": disabled,
    "cursor-pointer": !disabled,
  });
