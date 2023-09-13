import "./storybook.css";
import Theme from "./theme";
import { useEffect } from "react";

const palettes = {
  Latte: "latte",
  Frappe: "frappe",
  Macchiato: "macchiato",
  Mocha: "mocha",
};

export const globalTypes = {
  theme: {
    name: "Flavour",
    description: "Controls catppuccin flavour",
    defaultValue: "Macchiato",
    toolbar: {
      icon: "paintbrush",
      items: Object.keys(palettes),
      showName: true,
      dynamicTitle: true,
    },
  },
};

const getTheme = (themeName) => {
  return palettes[themeName];
};

const withThemeProvider = (Story, context) => {
  const { theme } = context.globals;

  useEffect(() => {
    // Clear all class names on preview body
    Object.values(palettes).forEach((theme) => {
      document.body.classList.remove(theme);
    });
    // Sets current theme
    document.body.classList.add(getTheme(theme));
  }, [theme]);

  return <Story {...context} />;
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: Theme,
  },
};

export const decorators = [withThemeProvider];
