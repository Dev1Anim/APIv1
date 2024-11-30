const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  // other configurations...
  plugins: [
    new NodePolyfillPlugin()
  ],
  resolve: {
    fallback: {
      "fs": false,
      "https": false,
      "http": false,
      "net": false,
      "path": false,
      // add other Node.js modules as needed
    }
  },
  // ... other configurations ...
  externals: [nodeExternals()], // Add this line to exclude Node.js modules
  node: {
    global: true,
    __filename: true,
    __dirname: true,
  }
};