module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recess-order',
  ],
  syntax: 'scss',
  plugins: ['stylelint-order'],
  // plugins: ['stylelint-scss', 'stylelint-order'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'value-keyword-case': [
      'lower',
      {
        ignoreKeywords: ['strokeDashoffset'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['use', 'forward', 'include', 'mixin', 'function', 'return', 'each', 'if'] },
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
    'color-hex-length': 'short',
    'length-zero-no-unit': true,
  },
};
