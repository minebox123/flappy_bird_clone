const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app.js",
  output: {
    filename: "[name].js"
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader"
      }
    ]
  },
  devtool: "cheap-module-eavl-source-map"
};
