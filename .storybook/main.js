module.exports = {
  stories: ["../lib/**/*.stories.@(mdx|js)"],
  addons: [
    "@storybook/addon-docs/",
    "@storybook/addon-actions/register",
    "@storybook/addon-links/",
    "@storybook/addon-viewport/",
    "@storybook/addon-knobs/",
    "@storybook/addon-a11y/",
    "@storybook/addon-toolbars",
    "@storybook/components",
    "@storybook/api"
  ]
};
