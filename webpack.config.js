/* eslint-disable no-undef */
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./lib/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd",
    globalObject: "this",
    library: "orchestrated-design-system",
    umdNamedDefine: true
  },
  module: {
    rules: [
      { use: "babel-loader", test: /\.jsx?$/, exclude: /node_modules/ },
      { use: "css-loader", test: /\.css$/ },
      { use: "url-loader", test: /\.gif$/ },
      { use: "file-loader", test: /\.(ttf|eot|svg)$/ },
      { use: "@mdx-js/loader", test: /\.mdx$/ },
      { use: "ts-loader", test: /\.tsx?$/, exclude: /node_modules/ }
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
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  }
};
