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
      "http": false, // Added fallback for http
      "net": false,  // Added fallback for net
      "path": false, // Added fallback for path
      // add other Node.js modules as needed
    }
  },
  // ... other configurations ...
  node: {
    global: true, // Enable global variables
    __filename: true, // Enable __filename
    __dirname: true, // Enable __dirname
  }
};
