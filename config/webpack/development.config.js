const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    myScripts: './js-packs/script.js'
  },

  output: {
    filename: 'script.js',
    path:  path.resolve(__dirname, '../../.upload/js')
  },
  devtool: "cheap-module-source-map", // inlines SourceMap per module
  plugins: [],

};
