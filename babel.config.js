module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.tsx', '.ios.js', '.android.js'],
        alias: {
          'api/*': 'api/*',
          'navigation/*': 'navigation/*',
          'screens/*': 'screens/*',
          'components/*': 'components/*',
          'store/*': 'store/*',
          'utils/*': 'utils/*',
          'locales/*': 'locales/*',
          'constant/*': 'constant/*',
          'hooks/*': 'hooks/*',
          'assets/*': 'assets/*',
        },
      },
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: true,
        regenerator: false,
      },
    ],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/proposal-object-rest-spread',
  ],
};
