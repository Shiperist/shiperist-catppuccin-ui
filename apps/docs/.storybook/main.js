module.exports = {
    stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.tsx'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        {
            name: "@storybook/addon-styling",
            options: {},
        },
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: true,
    },
};
