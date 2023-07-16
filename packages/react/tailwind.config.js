/** @type {import("tailwindcss").Config} */
module.exports = {
  theme: {
    extend: {
      ringWidth: {
        0: "0px",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      dropShadow: {
        s: "0 4px 6px rgba(0,0,0,.04)",
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(bg|text|border|ring|stroke|fill)-(?:rosewater|flamingo|pink|mauve|red|maroon|peach|yellow|green|teal|blue|sky|sapphire|lavender|crust|mantle|base|overlay0|overlay1|overlay2|surface0|surface1|surface2)(?:-opacity-[0-9]{1,2})?$/,
      variants: ["hover", "ui-selected"],
    },
  ],
  plugins: [
    require("@catppuccin/tailwindcss")({
      prefix: false,
      defaultFlavour: "macchiato",
    }),
  ],
};
