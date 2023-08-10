const { join } = require("path");
const variants = [
  "hover",
  "ui-selected",
  "group",
  "group-hover",
  "after",
  "before",
  "focus",
  "checked",
  "peer-checked",
  "peer-focus",
  "peer-checked:after",
  "peer-focus:after",
  "checked:after",
  "checked:before",
  "checked:focus",
];
module.exports = {
  content: [join(__dirname, "../components/**/src/*.{js,ts,jsx,tsx}")],
  theme: {},
  safelist: [
    // Existing safelist pattern for colors
    {
      pattern:
        /^(bg|text|border|ring|stroke|fill)-(?:rosewater|flamingo|pink|mauve|red|maroon|peach|yellow|green|teal|blue|sky|sapphire|lavender|crust|mantle|base|overlay0|overlay1|overlay2|surface0|surface1|surface2|transparent)$/,
      variants: variants,
    },
    // Radius classes
    {
      pattern: /^(rounded)-(xs|sm|md|lg|xl|2xl|3xl|4xl|full)$/,
      variants: variants,
    },
    // Text classes
    {
      pattern: /^(text)-(xs|sm|md|lg|xl|2xl|3xl|4xl)$/,
      variants: variants,
    },
    // Padding/margin/position/border/z classes
    {
      pattern:
        /^(p|py|px|pt|pr|pb|pl|m|my|mx|mt|mr|mb|ml|right|top|left|bottom|border|border-l|border-r|border-t|border-b|z)-[0-9]+$/,
      variants: variants,
    },
    // Width/height classes
    {
      pattern: /^(w|h|min-w|min-h)-(full|screen|[0-9]+)$/,
      variants: variants,
    },
    // Duration/delay/z classes
    {
      pattern: /^(duration|delay|z)-[0-9]+$/,
      variants: variants,
    },
    // Align items/justify items classes
    {
      pattern: /^(items|justify)-(?:center|start|end)$/,
      variants: variants,
    },
    // Animation items classes
    {
      pattern: /^(animate)-(?:spin|pulse|ping|bounce|none)$/,
      variants: variants,
    },
    // Font classes
    {
      pattern: /^(font)-(?:bold|semibold|normal|light|medium)$/,
      variants: variants,
    },
  ],
  plugins: [
    require("@catppuccin/tailwindcss")({
      prefix: false,
      defaultFlavour: "macchiato",
    }),
  ],
};
