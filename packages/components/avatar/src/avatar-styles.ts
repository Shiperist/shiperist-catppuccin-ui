import { cn } from "@shiperist-catppuccin-ui/utilities";

export const avatarSizeClass = {
  small: "w-8 h-8",
  medium: "w-12 h-12",
  large: "w-16 h-16",
  xlarge: "w-24 h-24",
};
export const avatarTextClass = {
  small: "text-sm",
  large: "text-3xl",
  medium: "text-xl",
  xlarge: "text-4xl",
};
export const avatarShapeClass = {
  circular: "rounded-full",
  rounded: "rounded-2xl",
  square: "rounded-none",
};
export const avatarIconSizeClass = {
  small: "w-5 h-5",
  medium: "w-6 h-6",
  large: "w-8 h-8",
  xlarge: "h-10 w-10",
};
export const avatarBaseClass = (
  backgroundColor: string,
  image: string,
  defaultImage: string,
  shape: string,
  size: string
) =>
  cn(
    "flex items-center justify-center relative inline-flex",
    avatarShapeClass[shape] || avatarShapeClass.rounded,
    avatarSizeClass[size] || avatarSizeClass.medium,
    {
      [`bg-${backgroundColor}`]: !(image || defaultImage),
    }
  );
