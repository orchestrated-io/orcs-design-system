module.exports = {
  stories: ["../lib/**/*.@(mdx|stories.@(js))"],

  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y",
    "@storybook/addon-toolbars",
    "@storybook/addon-actions",
    "@storybook/components",
    "@storybook/manager-api",
    "@storybook/core-events",
    "@chromatic-com/storybook",
    "@storybook/preset-create-react-app",
    "@storybook/addon-webpack5-compiler-babel"
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: "automatic"
        }
      }
    }
  })
};
