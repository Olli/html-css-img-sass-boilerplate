
module.exports = {
  entry: {
    myScripts: './js-packs/script.js'
  },

  output: {
    filename: './js/script.js'
  },
  mode: 'development',
  devtool: "cheap-module-source-map", // inlines SourceMap per module
  plugins: []
};
