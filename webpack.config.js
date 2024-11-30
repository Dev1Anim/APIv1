const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  // other configurations...
  plugins: [
    new NodePolyfillPlugin()
  ],
  resolve: {
    fallback: {
      "fs": false,
      "https": false,
      // add other Node.js modules as needed
    }
  }
};
