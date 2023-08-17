import { cn } from "@shiperist-catppuccin-ui/utilities";

export const tooltipClass = cn(
  "bg-mantle max-w-16 border-surface0 absolute z-10 h-fit max-h-48 w-full overflow-y-auto rounded-xl border px-2 py-1 text-center text-sm"
);

export const calculatePosition = (tooltipRef: any, targetRef: any, position: string) => {
  if (!tooltipRef.current || !targetRef.current) return;

  const tooltipRect = tooltipRef.current.getBoundingClientRect();
  const targetRect = targetRef.current.getBoundingClientRect();

  const newPositionStyle: React.CSSProperties = {};

  switch (position) {
    case "top":
      newPositionStyle.bottom = `${targetRect.height + 8}px`;
      newPositionStyle.left = `calc(50% - ${tooltipRect.width / 2}px)`;
      break;
    case "bottom":
      newPositionStyle.top = `${targetRect.height + 8}px`;
      newPositionStyle.left = `calc(50% - ${tooltipRect.width / 2}px)`;
      break;
    case "left":
      newPositionStyle.right = `${targetRect.width + 8}px`;
      newPositionStyle.top = `calc(50% - ${tooltipRect.height / 2}px)`;
      break;
    case "right":
      newPositionStyle.left = `${targetRect.width + 8}px`;
      newPositionStyle.top = `calc(50% - ${tooltipRect.height / 2}px)`;
      break;
    default:
      break;
  }

  return newPositionStyle;
};
