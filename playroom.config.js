const path = require("path");

module.exports = {
  components: "./lib",
  outputPath: ".storybook/static/playroom",
  snippets: "./playroom/Snippets.js",
  widths: [320, 375, 768, 1024, 1600],
  frameComponent: "./playroom/FrameComponent.js",
  exampleCode: `
    <Box bg="greyLightest" p="r" height="100vh">
        <Card title="Welcome to Playroom!">
            <P mb="r">
                Use playroom to quickly and easily construct shareable mockups using our design system.
            </P>
            <P mb="r">
                To begin, just type &lt; and a list of our components will pop up, you can continue typing to refine your search.
            </P>
            <P>
                For component examples and props usage see <StyledLink href="https://styleguide.orchestrated.io/?path=/docs/intro--page" target="_blank">ORCS storybook</StyledLink>.
            </P>
        </Card>
    </Box>
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
