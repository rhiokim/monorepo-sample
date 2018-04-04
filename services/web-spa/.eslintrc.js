module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    jest: true
  },
  globals: {
    page: true,
    browser: true,
    expectPage: true
  },
  plugins: ['flowtype', 'react'],
  extends: ['standard', 'standard-flow', 'react-app'],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false
    }
  },
  rules: {
    'jsx-a11y/href-no-hash': 'off',
  }
}
