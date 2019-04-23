const path = require("path");

module.exports = {
  title: "orca - orchestrated design system",
  components: "lib/components/**/*.js",
  ignore: [
    "**/__tests__/**",
    "**/*.test.{js,jsx,ts,tsx}",
    "**/*.spec.{js,jsx,ts,tsx}"
  ],
  assetsDir: "./public",
  styleguideComponents: {
    Wrapper: path.join(__dirname, "lib/styleguide/Wrapper")
  },
  styleguideDir: "./build",
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
};
