const { resolve } = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    host: "0.0.0.0",
    open: true,
    port: 4001,
    hot: true,
  },
  entry: resolve(__dirname, "./src/index.js"),
  output: {
    filename: "bundle.js",
    publicPath: "/",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: "/node_modules/",
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new HtmlPlugin({ template: resolve(__dirname, "public/index.html") }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new Dotenv(),
  ],
};
