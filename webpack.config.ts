import { Configuration, HotModuleReplacementPlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";

const webpackConfig: Configuration = {
  resolve: {
    modules: ["src", "node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  entry: "./src/index.tsx",
  module: {
    rules: [
      // --*-- BABEL --*--
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // --*-- STYLES --*--
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // --*-- HTML --*--
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      // --*-- IMAGES --*--
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./src/assets/images/favicon.ico",
      template: "public/index.html",
    }),
    new HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
  ],
};

export default webpackConfig;
