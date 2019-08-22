const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  outputDir: '../public/{{projectName}}',
  lintOnSave: true,
  devServer: {
    disableHostCheck: true
  },
  configureWebpack: {
    output: {
      filename: 'js/[name].[hash].js',
      chunkFilename: 'js/[name].[hash].js'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .options({
        fix: true
      })

    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end();

    // svg-sprite-loader
    config.module
      .rule('svgSpriteLoader')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end();
  }
}
