const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path'); // -> this path for hardDisk/Users/user/Desktop/project/dist

module.exports = {

    entry: "./src/js/index.js",

    output: {
        path: path.resolve(__dirname, "build"),
        filename: "js/bundle.js"
    },

    devServer: {
      contentBase: path.join(__dirname, "build/pages"),
      open: true,
      port: 7878,
      writeToDisk: true,
      stats: "errors-only"
    },

    module: {
        rules: [
          {
            test: /\.(sass|css|scss)$/,
            use: [
              // Extract css
              MiniCssExtractPlugin.loader,
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/pages/index.html",
            filename: "pages/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "css/style.css"
        })
    ],
};
