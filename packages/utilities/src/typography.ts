export type TextProp = "p" | "a" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "pre";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: TextProp;
  error?: boolean;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}

export function formatClass(bold: boolean, italic: boolean, underline: boolean) { 
  return `${bold ? "font-bold" : ""} ${italic ? "italic" : ""} ${underline ? "underline" : ""}`}