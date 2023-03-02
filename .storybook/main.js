const config = {
    framework: '@storybook/react',
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/preset-create-react-app'
    ],
    core: {
        builder: '@storybook/builder-webpack5',
        disableTelemetry: true,
    }
};

module.exports = config;
