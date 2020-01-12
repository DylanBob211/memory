module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-use-before-define": 0,
    "no-shadow": 0,
    "no-underscore-dangle": 0,
    "import/prefer-default-export": 0,
    "arrow-parens": 0,
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "no-nested-ternary": 0,
    "react/no-array-index-key": 0,
    "no-plusplus": 0,
  },
};
