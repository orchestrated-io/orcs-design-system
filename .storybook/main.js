module.exports = {
  stories: ["../lib/**/*.@(mdx|stories.@(js))"],

  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y",
    "@storybook/addon-toolbars",
    "@storybook/components",
    "@storybook/api",
    "@storybook/addon-mdx-gfm",
    "@storybook/manager-api",
    "@storybook/core-events",
    "@chromatic-com/storybook"
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
