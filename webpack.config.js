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
      contentBase: path.join(__dirname, "build"),
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
            test: /\.(png|jpe?g|gif|webp)$/i,
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
          {
            test: require.resolve("jquery"),
            loader: "expose-loader",
            options: {
              exposes: ["$", "jQuery"],
            },
          }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/pages/index.html",
          filename: "index.html"
        }),

        new HtmlWebpackPlugin({
          template: "./src/pages/about.html",
          filename: "about.html"
        }),

        new HtmlWebpackPlugin({
          template: "./src/pages/contact.html",
          filename: "contact.html"
        }),

        new HtmlWebpackPlugin({
          template: "./src/pages/projects.html",
          filename: "projects.html"
        }),

        new HtmlWebpackPlugin({
          template: "./src/pages/project-details.html",
          filename: "project-details.html"
        }),

        new HtmlWebpackPlugin({
          template: "./src/pages/blog.html",
          filename: "blog.html"
        }),

        new HtmlWebpackPlugin({
          template: "./src/pages/blog-details.html",
          filename: "blog-details.html"
        }),

        new HtmlWebpackPlugin({
          template: "./src/pages/add-blog.html",
          filename: "add-blog.html"
        }),
        // CSS
        new MiniCssExtractPlugin({
            filename: "css/style.css"
        })
    ],
};
