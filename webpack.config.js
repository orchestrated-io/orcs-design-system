const path = require("path");

module.exports = {
  entry: "./lib/index.js",
  output: {
    filename: "index.js",
    library: "orchestrated-design-system",
    libraryTarget: "umd",
    publicPath: "/dist/",
    umdNamedDefine: true
  },
  module: {
    loaders: [
      { exclude: ["node_modules"], loader: "babel", test: /\.jsx?$/ },
      { loader: "style-loader!css-loader", test: /\.css$/ },
      { loader: "url-loader", test: /\.gif$/ },
      { loader: "file-loader", test: /\.(ttf|eot|svg)$/ },
      { loader: "@mdx-js/loader", test: /\.mdx$/ }
    ]
  },
  externals: {
    "styled-components": {
      commonjs: "styled-components",
      commonjs2: "styled-components",
      amd: "styled-components"
    },
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  }
};
