/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      ringWidth: {
        '0': '0px'
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px'
      },
      dropShadow: {
        s: '0 4px 6px rgba(0,0,0,.04)'
      }
    }
  },
  safelist: [
    {
      pattern:
          /^(bg-(?:rosewater|flamingo|pink|mauve|red|maroon|peach|yellow|green|teal|blue|sky|sapphire|lavender|crust|mantle|base))$/,
      variants: ["hover", "ui-selected"]
    },
    {
      pattern:
          /^(text-(?:rosewater|flamingo|pink|mauve|red|maroon|peach|yellow|green|teal|blue|sky|sapphire|lavender|crust|mantle|base))$/,
      variants: ["hover", "ui-selected"]
    },
    {
      pattern:
          /^(border-(?:rosewater|flamingo|pink|mauve|red|maroon|peach|yellow|green|teal|blue|sky|sapphire|lavender|crust|mantle|base))$/,
      variants: ["hover", "ui-selected"]
    },
    {
      pattern:
          /^(ring-(?:rosewater|flamingo|pink|mauve|red|maroon|peach|yellow|green|teal|blue|sky|sapphire|lavender|crust|mantle|base))$/
    },
    {
      pattern:
          /^(stroke-(?:rosewater|flamingo|pink|mauve|red|maroon|peach|yellow|green|teal|blue|sky|sapphire|lavender|crust|mantle|base))$/
    },
    {
      pattern:
          /^(fill-(?:rosewater|flamingo|pink|mauve|red|maroon|peach|yellow|green|teal|blue|sky|sapphire|lavender|crust|mantle|base))$/
    }
  ],
  plugins: [
    require("@catppuccin/tailwindcss")({
      prefix: false,
      defaultFlavour: "macchiato"
    })
  ]
};
