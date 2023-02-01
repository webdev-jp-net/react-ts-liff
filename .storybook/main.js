const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  staticDirs: ['../public'],
  webpackFinal: async config => {
    /**
     * webpackがパッケージfsを解決できない対策
     * ModuleNotFoundError: Module not found: Error: Can't resolve 'fs' in 'hoge'
     */
    config.resolve.fallback = {
      ...(config.resolve || {}).fallback,
      fs: false,
    };

    config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, '../src')];
    config.resolve.plugins = [...(config.resolve.plugins || []), new TsconfigPathsPlugin()];

    /**
     * webpackが.sh拡張子を解釈できない対策
     * ModuleParseError: Module parse failed: Unexpected character
     */
    config.module.rules.push({
      test: /\.sh$/,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: true,
            },
          },
        },
        {
          loader: 'sass-loader',
          options: {
            additionalData: `@use 'src/style/' as *;`,
          },
        },
      ],
    });
    return config;
  },
  core: {
    builder: 'webpack5',
  },
};
