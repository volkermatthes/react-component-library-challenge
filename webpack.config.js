const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    button: "./src/components/inputs/Button/Button.tsx",
    checkbox: "./src/components/inputs/Checkbox/Checkbox.tsx",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "umd",
    library: "[name]",
  },
};
