module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react-hooks', 'react', '@typescript-eslint'],
  extends: [
    'react-app',
    'react-app/jest',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  // add your custom rules here
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 0,
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'object', 'type', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: 'reportWebVitals',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'liff',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@storybook/*',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'react-redux',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'react-router-dom',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'components/features/e**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'components/parts/e**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'components/pages/**',
            group: 'internal',
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
            pattern: 'style/**/*.scss',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: './**/*.*',
            group: 'sibling',
            position: 'before',
          },
          {
            pattern: '@types/**/*.d.ts',
            group: 'type',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: [
          'react',
          'react-router-dom',
          'react-redux',
          '@storybook/react',
          'liff',
          'reportWebVitals',
        ],
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
};
