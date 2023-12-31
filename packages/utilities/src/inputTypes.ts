export type Size = "small" | "medium" | "large" | "xlarge";
export type ColorVariants = "success" | "warning" | "danger" | "info" | "base";
export type Orientation = "horizontal" | "vertical";
export type PositionVertical = "top" | "bottom";
export type PositionHorizontal = "left" | "right";
export type Positions = "left" | "right" | "center";
export type Boundary = "inside" | "outside";
export type PositionPresets =
  | "top-left"
  | "top-right"
  | "top-center"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"
  | "middle-left"
  | "middle-right"
  | "middle-center";
export type TextProp = "p" | "a" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "pre";
export type ColorSet =
  | "rosewater"
  | "flamingo"
  | "pink"
  | "mauve"
  | "red"
  | "maroon"
  | "peach"
  | "yellow"
  | "green"
  | "teal"
  | "blue"
  | "sky"
  | "sapphire"
  | "lavender"
  | "crust"
  | "mantle"
  | "base"
  | "overlay0"
  | "overlay1"
  | "overlay2"
  | "surface0"
  | "surface1"
  | "surface2";
export type CSSPosition = {
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
};
