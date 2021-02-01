module.exports = {
  eslintIntegration: true, // 使用eslint
  printWidth: 120, // 每行最大字符数，超过则换行
  "prettier.useTabs": false, // 缩进不使用tab，使用空格
  tabWidth: 2, // tab size
  semi: false, // 语句末尾分号
  singleQuote: true, // 使用单引号，此处不适用JSX，JSX在eslintrc中
  arrowParens: 'always', // 箭头函数只有一个参数时参数加括号。avoid: 省略括号
  jsxBracketSameLine: false, // 将闭合标签符 /> 放在最后一行的末尾 default: true，false是单独一行放置
  wrapAttributes: false,
  stylelintIntegration: false, // 不让prettier使用stylelint的代码格式进行校验
  "prettier.ignorePath": ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
}
