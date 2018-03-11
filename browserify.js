const chalk = require('chalk')
const exec = require('shelljs.exec')

const webpackConfig = require('./webpack.config')
const filename = webpackConfig.output.filename

let cmdObj
let count = 0

cmdObj = exec(`git add ${filename}`, {silent: true})
count += cmdObj.code
cmdObj = exec(`git commit -m "Updated ${filename}" ${filename}`, {silent: true})
count += cmdObj.code

if (count === 0) {
  console.log(chalk.green(`Committed ${filename}`))
} else {
  console.log(chalk.yellow(`Did not commit ${filename}`))
}
