// tailwind config is required for editor support
const sharedConfig = require("@shiperist-catppuccin-ui/react/tailwind.config.js");

module.exports = {
    presets: [sharedConfig],
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@shiperist-catppuccin-ui/**/*.{js,ts,jsx,tsx}",
    ],
};
