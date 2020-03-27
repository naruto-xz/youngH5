module.exports = {
  root: true, //从根目录开始搜索
  env: {  //指定执行环境
    node: true,
    browser: true
  },
  parserOptions: {  //指定语法分析器选项
    parser: 'babel-eslint', //指定ESLint使用的语法分析器
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: [  //使用eslint推荐的配置，推荐配置中只包含一些容易导致出错的配置
    'plugin:vue/essential',
    "eslint:recommended"
  ],
  /**
   * "off" 或 0 - 关闭，不校验该规则
   * "warn" 或 1 - 警告，不影响 exit code
   * "error" 或 2 - 错误。
   */
  rules: {
    // 仅调试环境可以使用debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 仅调试环境允许console
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 块语句中的内容不能为空
    'no-empty': 0,
    // 必须使用 if(){} 中的{}
    'curly': 2,
    // 强制用 ===
    'eqeqeq': 2,
    // 不能比较自身，禁止 a === a
    'no-self-compare': 2,
    // 是否允许非空数组里面有多余的空格，禁止数组两边的空格 [ 1 ] 应该改成 [1]
    'array-bracket-spacing': 2,
    // 强制驼峰法命名（不检查属性名）
    'camelcase': [2, {'properties': 'never'}],
    // 逗号前后空格格式 [1, 2, 3]
    'comma-spacing': [2, {'before': false, 'after': true}],
    // 逗号在行尾
    'comma-style': [2, 'last'],
    // 禁止属性中的空格，如 obj[ name ] 应为 obj[name]
    'computed-property-spacing': [2, 'never'],
    // 行尾必须有分号
    'semi': 2,

    /* 后面是空格相关的配置，都只开了默认配置，只有小部分配置没开，或者适当的放宽了限制 */
    // 强制2个空格缩进
    'indent': [2, 4, {'SwitchCase': 1}],
    // 强制关键字前后都有空格， 如 if(test) 应为 if (test)
    'keyword-spacing': 2,
    // 强制 key-value 格式为 { key: value }，冒号前无空格，冒号后有空格（可以是一个也可以是多个）
    'key-spacing': [2, { 'mode': 'minimum' }],
    // 禁止多余的属性前的空格，如 window. jQuery 应为 window.jQuery
    'no-whitespace-before-property': 2,
    // 括号内禁止空格 ( name ) 会报错，可使用 (name)
    'space-in-parens': 2,
    // 强制操作符两边有空格  a + b
    'space-infix-ops': 2,
    // 强制块之前必须有空格，例： if (test) {
    'space-before-blocks': 2,
    // 强制function 左括号前有空格 function name ()
    'space-before-function-paren': 2,
    // 强制箭头函数的箭头前后有空格，例 resp => {
    'arrow-spacing': 2,
    //箭头函数用小括号括起来
    'arrow-parens': 0,
    //生成器函数*的前后空格
    'generator-star-spacing': 0
  },
};
