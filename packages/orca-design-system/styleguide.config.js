const path = require("path");

module.exports = {
  title: "orca - orchestrated design system",
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap'
        }
      ]
    }
  },
  components: "lib/components/**/*.js",
  ignore: [
    "**/__tests__/**",
    "**/*.test.{js,jsx,ts,tsx}",
    "**/*.spec.{js,jsx,ts,tsx}"
  ],
  assetsDir: "./public",
  styleguideComponents: {
    Wrapper: path.join(__dirname, "/styleguide/Wrapper")
  },
  require: [
    path.resolve(__dirname, 'styleguide/setup.js')
  ],
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
