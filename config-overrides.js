const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const rewireWebpackBundleAnalyzer = require('react-app-rewire-webpack-bundle-analyzer')

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireReactHotLoader(config, env)

  if (env === 'production') {
    config = rewireWebpackBundleAnalyzer(config, env, {
      analyzerMode: 'static',
      reportFilename: 'report.html',
      openAnalyzer: false
    })
  }

  return config
}
