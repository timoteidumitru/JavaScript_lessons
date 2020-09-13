const path = require("path");

module.exports = {
  entry: "./js/app.js",
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "bundle.js",
  },
  mode: "development",
};
