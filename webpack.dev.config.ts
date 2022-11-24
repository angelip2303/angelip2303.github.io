import path from "path";
import { merge } from "webpack-merge";
import webpackConfig from "./webpack.config";
import { Configuration as WebpackConfig } from "webpack";
import { Configuration as WebpackDevServerConfig } from "webpack-dev-server";

interface Configuration extends WebpackConfig {
  devServer?: WebpackDevServerConfig;
}

const config: Configuration = merge(webpackConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: path.join(__dirname, "build"),
    historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true,
  },
});

export default config;
