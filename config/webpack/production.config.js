const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  entry: {
    myScripts: './js-packs/script.js'
  },

  output: {
    filename: './js/script.js'
  },

  plugins: [
    new UglifyJsPlugin({

    })
  ]
};
