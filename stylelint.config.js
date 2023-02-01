module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recess-order',
  ],
  syntax: 'scss',
  overrides: [
    {
      files: ['src/**/*.tsx'],
      customSyntax: '@stylelint/postcss-css-in-js',
    },
  ],
  plugins: ['stylelint-order'],
  // plugins: ['stylelint-scss', 'stylelint-order'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  customSyntax: 'postcss-scss',
  rules: {
    'value-keyword-case': [
      'lower',
      {
        ignoreKeywords: [/.*/],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'use',
          'forward',
          'include',
          'mixin',
          'function',
          'return',
          'for',
          'each',
          'if',
        ],
      },
    ],
    'order/order': [
      'custom-properties',
      'dollar-variables',
      {
        type: 'at-rule',
        name: 'extend',
      },
      {
        type: 'at-rule',
        name: 'include',
      },
      'declarations',
      {
        type: 'at-rule',
        name: 'include',
        parameter: '^mq',
      },
      {
        type: 'at-rule',
        name: 'media',
      },
      'rules',
    ],
    'no-invalid-position-at-import-rule': null,
    'color-hex-length': 'short',
    'custom-property-pattern': null,
    'function-no-unknown': null,
    'keyframes-name-pattern': null,
    'length-zero-no-unit': true,
    'selector-class-pattern': null,
  },
};
