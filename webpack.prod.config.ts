import path from "path";
import { merge } from "webpack-merge";
import webpackConfig from "./webpack.config";
import { Configuration } from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const config: Configuration = merge(webpackConfig, {
  mode: "production",
  cache: true,
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
    publicPath: "",
    assetModuleFilename: "./src/assets/images/[name].[ext]",
  },
  plugins: [new CleanWebpackPlugin()],
});

export default config;
