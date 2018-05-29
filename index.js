const BundleTracker = require('webpack-bundle-tracker');
const { info } = require('@vue/cli-shared-utils')

module.exports = (api, options) => {
  api.registerCommand('devbuild', {
    description: 'build app and watch for changes (development mode by default)',
    usage: 'vue-cli-service devbuild',
    options: {
      '--filename': `specify filename option for BundleTracker plugin`,
      '--watch': `watch and rebuild on change`,
      '--publicpath': `configure publicPath (e.g. /static/)`,
    }
  }, function devbuild (args) {
    info('Starting development server...')

    // although this is primarily a dev server, it is possible that we
    // are running it in a mode with a production env, e.g. in E2E tests.
    const isProduction = process.env.NODE_ENV === 'production'

    const webpack = require('webpack')

    // resolve webpack config
    const webpackConfig = api.resolveWebpackConfig()
    const filename = args.filename || './webpack-stats.json'
    webpackConfig.plugins.push(new BundleTracker({ filename }))
    if (args.publicpath) {
      webpackConfig.output.publicPath = args.publicpath
    }

    const entry = args._[0]
    if (entry) {
      webpackConfig.entry = {
        app: api.resolve(entry)
      }
    }

    // create compiler
    const compiler = webpack(webpackConfig)

    if (args.watch) {
      compiler.watch({}, () => {})
    } else {
      compiler.run()
    }
  })
}

module.exports.defaultModes = {
  devbuild: 'development'
}
