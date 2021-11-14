const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path'); // -> this path for hardDisk/Users/user/Desktop/project/dist

module.exports = {

    entry: "./src/js/index.js",

    output: {
      publicPath: '/',
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
            test: /\.html$/i,
            loader: 'html-loader',
          },

          {
            test: /\.(sass|css|scss)$/,
            use: [
              {
                 loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: '../'
                  }
                },
                "css-loader",
                "sass-loader"
              ],
          },

          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: "images",
                }
              },
            ],
          },
          {
            test: /\.(svg|eot|woff|woff2|ttf)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: "fonts",
                }
              },
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
