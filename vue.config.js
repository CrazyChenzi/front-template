const ESLintPlugin = require('eslint-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  configureWebpack: config => {
    config.plugins.push(
      new StyleLintPlugin({
        files: ['src/**/*.{vue,scss}'],
        fix: true // 可选是否自动修复
      })
    )
    config.plugins.push(
      new ESLintPlugin({
         files: ['src/**/*.{vue,ts}'],
         fix: true
      })
    )
  }
}
