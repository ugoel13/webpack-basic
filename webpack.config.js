module.exports = {
  entry: "./app.js",
  output: {
    filename: "bundle.js"
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: ["js", "es6"]
  }
};
