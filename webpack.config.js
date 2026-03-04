import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js", // Renamed to avoid confusion with src/index.js
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // This points to your skeleton!
    }),
  ],
  devServer: {
    watchFiles: ["./src/template.html"], // Forces a reload when you edit HTML
  },
  // ADD THIS SECTION BELOW:
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
