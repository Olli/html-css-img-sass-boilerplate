const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  entry: {
    myScripts: './js-packs/script.js'
  },

  output: {
    filename: './js/script.js'
  },
  mode: 'production',
  plugins: [
    new UglifyJsPlugin({

    })
  ]
};
