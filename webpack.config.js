const pkg = require('./package.json')
const {camelCase} = require('lodash')
const library = camelCase(pkg.name)

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'browser.js',
    library
  }
}
