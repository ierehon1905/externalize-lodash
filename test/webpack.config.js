const path = require('path');

module.exports = {
  entry:  path.resolve(__dirname, 'externalize-cases.browser.spec'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  mode: 'production',
  externals: [
    require('../index')
  ]
};
