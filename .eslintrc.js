/**
 * off | 0 :表示关闭规则。
 * warn | 1 :表示将该规则转换为警告。
 * error | 2 :表示将该规则转换为错误。
 */
module.exports = {
    parser: "babel-eslint",
    parserOptions: {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
        "modules": true
      }
    },
    rules: {
      // 禁止使用 console,上线时要去掉
      "no-console": [process.env.NODE_ENV === "production" ? "error" : "off", { "allow": ["warn", "error"] }],
      // 禁止 alert,上线时要去掉
      "no-alert": process.env.NODE_ENV === "production" ? "error" : "off",
      // 禁止 debugger,上线时要去掉
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      // if 后必须包含 { ，单行 if 除外
      'curly': [2, 'multi-line', 'consistent'],
      // switch 语句必须包含 default
      'default-case': 2,
      // for in 时需检测 hasOwnProperty
      'guard-for-in': 2,
      // new关键字后类名应首字母大写
      'new-cap': [2, {
        'capIsNew': false, // 允许大写开头的函数直接执行
      }],
      // 禁止使用 Array 构造函数，使用 Array(num) 直接创建长度为 num 的数组时可以
      'no-array-constructor': 2,
      // 不允许使用 2. 或 .5 来表示数字，需要用 2、2.0、0.5 的格式
      'no-floating-decimal': 2,
      // 禁止在 setTimeout 和 setInterval 中传入字符串，因会触发隐式 eval
      'no-implied-eval': 2,
      // 禁止连等赋值
      'no-multi-assign': 2,
      // 禁止使用保留字作为变量名
      'no-shadow-restricted-names': 2,
      // 禁止属性前出现空格，如 foo. bar()
      'no-whitespace-before-property': 2,
      //空4格
      "indent": [0, 4, { "SwitchCase": 1 }],
      "eqeqeq": 2
    }
  }
  