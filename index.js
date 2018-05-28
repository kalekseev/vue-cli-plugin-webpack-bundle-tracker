const BundleTracker = require('webpack-bundle-tracker');
const { info } = require('@vue/cli-shared-utils')

module.exports = (api, options) => {
  api.registerCommand('devbuild', {
    description: 'build app and watch for changes (development mode by default)',
    usage: 'vue-cli-service devbuild',
  }, function devbuild (args) {
    info('Starting development server...')

    // although this is primarily a dev server, it is possible that we
    // are running it in a mode with a production env, e.g. in E2E tests.
    const isProduction = process.env.NODE_ENV === 'production'

    const webpack = require('webpack')

    // resolve webpack config
    const webpackConfig = api.resolveWebpackConfig()
    webpackConfig.plugins.push(new BundleTracker({filename: './webpack-stats.json'}))

    const entry = args._[0]
    if (entry) {
      webpackConfig.entry = {
        app: api.resolve(entry)
      }
    }

    // create compiler
    const compiler = webpack(webpackConfig)

    compiler.watch({}, () => {})
  })
}

module.exports.defaultModes = {
  devbuild: 'development'
}
