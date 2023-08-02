import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function getRGBAFromHex(color: string) {
  const namedColors = {
    overlay2: "9096b3",
    green: "a6da95",
    red: "ed8796",
    yellow: "eed49f",
    blue: "8aadf4",
  };

  const hexColor = namedColors[color] || color;
  const hex = hexColor.replace("#", "");
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, 0.4)`;
}

export function formatClass(
  bold: boolean,
  italic: boolean,
  underline: boolean
) {
  return `${bold ? "font-bold" : ""} ${italic ? "italic" : ""} ${
    underline ? "underline" : ""
  }`;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
