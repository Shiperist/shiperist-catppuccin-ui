export const colors = {
  success: "green",
  danger: "red",
  warning: "yellow",
  info: "blue",
  base: "overlay2",
};

export const orientations = {
  horizontal: "flex flex-row",
  vertical: "flex flex-col",
};
export const colorClass = (variant: string) => colors[variant] || colors.base;
