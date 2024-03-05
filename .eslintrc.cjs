module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
  },
  ignorePatterns: ['public/*.js'],
  plugins: ['react-refresh', 'eslint-plugin-import'],
  extends: ['prettier', 'plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
  // add your custom rules here
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-unused-vars': 1,
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'object', 'index', 'type'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: '@storybook/*',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'react-redux',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@line/liff?*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-router-dom',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'store|store/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'routes/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'hooks/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'components/layout/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: 'components/pages/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: 'components/parts/**',
            group: 'object',
            position: 'before',
          },
          {
            pattern: 'style/**/*.scss',
            group: 'object',
            position: 'before',
          },
          {
            pattern: './**/*.*',
            group: 'index',
            position: 'before',
          },
          {
            pattern: './*.*',
            group: 'index',
            position: 'before',
          },
          {
            pattern: 'types/**/*',
            group: 'type',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: [],
      },
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
}
