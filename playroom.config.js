const path = require("path");

module.exports = {
  components: "./lib",
  outputPath: ".storybook/static/playroom",
  // snippets: "./snippets",
  frameComponent: "./playroom/FrameComponent.js",
  exampleCode: `
    <Button>
      Hello World!
    </Button>
  `,
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          loader: require.resolve("babel-loader"),
          options: {
            presets: [
              require.resolve("@babel/preset-env"),
              require.resolve("@babel/preset-react")
            ],
            plugins: [
              require.resolve("@babel/plugin-proposal-class-properties")
            ]
          }
        },
        {
          test: /_datepicker\.css/i,
          use: ["style-loader", "css-loader"]
        }
      ]
    }
  }),
  openBrowser: false
};
