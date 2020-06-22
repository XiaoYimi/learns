const merge = require('webpack-merge')

const baseConf = require('./webpack.base.config')
const devConf = require('./webpack.dev.config')
const proConf = require('./webpack.pro.config')

module.exports = (env, args) => {
  const conf = args.mode === 'development' ? devConf : proConf
  return merge(baseConf, conf)
}
