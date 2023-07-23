module.exports = {
  theme: {},
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
