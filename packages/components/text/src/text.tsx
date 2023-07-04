import React from "react";

export type TextFont = "none" | "bold" | "italic";
export type TextProp = "p" | "h1" | "h2" | "h3";

const fontClasses: Record<TextFont, string> = {
  none: "",
  bold: "font-bold",
  italic: "italic",
};

const propClasses: Record<TextProp, string> = {
  p: "text-base",
  h1: "text-4xl",
  h2: "text-3xl",
  h3: "text-xl",
};

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  font?: TextFont;
  prop?: TextProp | "description";
  link?: boolean;
}

const Text: React.FC<TextProps> = ({ font = "none", prop = "p", link = false, className = "", children, ...other }) => {
  const fontClass = fontClasses[font];
  const propClass = propClasses[prop];

  const textClass = `text-text ${fontClass ?? ""} ${link ? "hover:underline cursor-pointer" : ""} ${
    prop === "description" ? "text-sm" : propClass
  }`;

  const Element = prop === "description" ? "p" : link ? "a" : prop;
  return (
    <Element className={`${className} ${textClass}`} {...other}>
      {children}
    </Element>
  );
};

Text.displayName = "Text";

export default Text;
