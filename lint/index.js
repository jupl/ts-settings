'use strict'

const path = require('path')

const rules = [
  './rules/best-practices',
  './rules/errors',
  './rules/es6',
  './rules/functional',
  './rules/jsdoc',
  './rules/node',
  './rules/react',
  './rules/sonar',
  './rules/style',
  './rules/typescript',
  './rules/variables',
].map(require)

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jsdoc/recommended',
    'plugin:react/recommended',
    'plugin:sonarjs/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: rules.reduce((r, {jsRules}) => ({...r, ...jsRules}), {}),
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: rules.reduce((r, {tsRules}) => ({...r, ...tsRules}), {}),
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    project: [path.resolve('tsconfig.json')],
    tsconfigRootDir: path.resolve(),
  },
  plugins: ['functional', 'react-hooks'],
  rules: rules.reduce((r, {allRules}) => ({...r, ...allRules}), {}),
  settings: {
    jsdoc: {tagNamePreference: {returns: 'return'}},
    react: {version: 'detect'},
  },
}
