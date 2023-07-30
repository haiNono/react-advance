module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  overrides: [],
  extends: ['react-app', 'react-app/jest'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // 解决 Using `babel-preset-react-app` requires that you specify `NODE_ENV` or `BABEL_ENV` environment variables.
    // 这个不影响运行的报错的配置
    babelOptions: {
      presets: [
        ['babel-preset-react-app', false],
        'babel-preset-react-app/prod'
      ]
    }
  },
  plugins: ['react'],
  rules: {
    // 解决eslint报错： xxx missing in props validation
    'react/prop-types': 0
  }
}
