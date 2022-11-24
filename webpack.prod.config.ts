import path from "path";
import { merge } from "webpack-merge";
import webpackConfig from "./webpack.config";
import { Configuration } from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const config: Configuration = merge(webpackConfig, {
  mode: "production",
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[chunkhash].ts",
  },
  plugins: [new CleanWebpackPlugin()],
});

export default config;
