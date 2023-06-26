import './storybook.css';
import Theme from "./theme";
import { useEffect } from "react";

const palettes = {
    'Latte': 'latte',
    'Frappe': 'frappe',
    'Macchiato': 'macchiato',
    'Mocha': 'mocha',
};

export const globalTypes = {
    theme: {
        name: 'Flavour',
        description: 'Controls catppuccin flavour',
        defaultValue: 'Macchiato',
        toolbar: {
            icon: 'paintbrush',
            // Array of plain string values or MenuItem shape (see below)
            items: Object.keys(palettes),
            // Property that specifies if the name of the item will be displayed
            showName: true,
            // Change title based on selected value
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
        document.body.classList.add(getTheme(theme.theme));
    }, [theme]);

    return (
        <Story {...context} />
    );
};

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    docs: {
        theme: Theme,
    }
};

export const decorators = [withThemeProvider];
