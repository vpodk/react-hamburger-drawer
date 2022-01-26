const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["js", "jsx"],
      exclude: ["/node_modules/", "/dist/"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|dist)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|dist)/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  externals: {
    react: "commonjs react",
    "react-dom": "commonjs react-dom",
  },
};
