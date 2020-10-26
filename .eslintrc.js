// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    'linebreak-style': ['off', 'windows'],
    //关闭末尾强制使用分号
    'semi': [0],
    //关闭函数必须定义函数名
    'func-name': 0,
    //关闭初始变量必须定值
    'init-declarations': 0,
    //关闭禁止使用嵌套的三目运算符
    'no-nested-ternay': 0,
    //关闭禁止使用三目运算符
    'no-ternaty': 0,
    //关闭禁止使用 ++ 
    'no-plusplus': 0,
    //关闭return中禁止出现赋值
    'no-return-assign': 0,
    //关闭禁止不必要的嵌套
    'no-unneeded-ternary': 0,
    //箭头函数用小括号括起来
    'arrow-parens': 0,
    //在对象中使用getter/setter
    'accessor-pairs': 0,
    //最大长度
    'max-len': 0,
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
