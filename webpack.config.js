/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[hash:8].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img/",
            },
          },
        ],
      },
    ],
  },
  devServer: {
    static: "./dist",
  },
  optimization: {
    minimize: true,
    minimizer: [new HtmlMinimizerPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: "history.html",
      template: "./src/history.html",
    }),
  ],
};
