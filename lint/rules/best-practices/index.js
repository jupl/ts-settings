'use strict'

module.exports = {
  allRules: {
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'default-case': 'error',
    'grouped-accessor-pairs': 'error',
    'max-classes-per-file': ['error', 1],
    'no-alert': 'error',
    'no-caller': 'error',
    'no-constructor-return': 'error',
    'no-div-regex': 'error',
    'no-else-return': ['error', {allowElseIf: true}],
    'no-eval': 'error',
    'no-implicit-coercion': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-return-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-useless-call': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'prefer-named-capture-group': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    radix: ['error', 'as-needed'],
    yoda: ['error', 'never', {exceptRange: true}],
  },
  jsRules: {
    'consistent-return': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-proto': 'error',
    'no-useless-concat': 'error',
  },
}
