module.exports = {
  stories: ["../lib/**/*.@(mdx|stories.@(js))"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-viewport",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y",
    "@storybook/addon-toolbars",
    "@storybook/components",
    "@storybook/api",
    "@storybook/addon-mdx-gfm",
    "@storybook/manager-api",
    "@storybook/core-events"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: "docs"
  }
};
