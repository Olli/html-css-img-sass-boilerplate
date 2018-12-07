const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: {
    myScripts: './js-packs/script.js'
  },

  output: {
    filename: 'script.js',
    path:  path.resolve(__dirname, '../../.upload/js')

  },

  plugins: [
    new UglifyJsPlugin({
      parallel: true
    })
  ],

};
