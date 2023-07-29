module.exports = {
  theme: {},
  safelist: [
    // Existing safelist pattern for colors
    {
      pattern:
        /^(bg|text|border|ring|stroke|fill)-(?:rosewater|flamingo|pink|mauve|red|maroon|peach|yellow|green|teal|blue|sky|sapphire|lavender|crust|mantle|base|overlay0|overlay1|overlay2|surface0|surface1|surface2)(?:-opacity-[0-9]{1,2})?$/,
      variants: ["hover", "ui-selected"],
    },
    // Radius classes
    {
      pattern: /^(rounded)-(xs|sm|md|lg|xl|2xl|3xl|4xl|full)$/,
      variants: ["responsive"],
    },
    // Text classes
    {
      pattern: /^(rounded)-(xs|sm|md|lg|xl|2xl|3xl|4xl)$/,
      variants: ["responsive"],
    },
    // Padding/margin classes
    {
      pattern: /^(p|py|px|pt|pr|pb|pl|m|my|mx|mt|mr|mb|ml)-[0-9]+$/,
      variants: ["responsive"],
    },
    // Width/height classes
    {
      pattern: /^(w|h)-(full|screen|[0-9]+)$/,
      variants: ["responsive"],
    },
    {
      pattern: /^(duration)-[0-9]+$/,
      variants: ["responsive"],
    },
    "peer-checked:bg-green",
    "peer-checked:bg-red",
    "peer-checked:bg-yellow",
    "peer-checked:bg-blue",
    "peer-checked:bg-overlay2",
    "peer-checked:border-green",
    "peer-checked:border-red",
    "peer-checked:border-yellow",
    "peer-checked:border-blue",
    "peer-checked:border-overlay2",
    "peer-checked:after:bg-green",
    "peer-checked:after:bg-red",
    "peer-checked:after:bg-yellow",
    "peer-checked:after:bg-blue",
    "peer-checked:after:bg-overlay2",
  ],
  plugins: [
    require("@catppuccin/tailwindcss")({
      prefix: false,
      defaultFlavour: "macchiato",
    }),
  ],
};
