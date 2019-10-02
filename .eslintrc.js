module.exports = {
  root: true,
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: [
    'prettier',
    'react-hooks',
    'react-native',
    'eslint-comments',
    'react',
    'jest',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        tabWidth: 2,
        printWidth: 80,
        bracketSpacing: true,
        semi: true,
        trailingComma: 'all',
      },
    ],
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.tsx', '.jsx', '.js'] },
    ],
    'react/jsx-props-no-spreading': 0,
  },
  env: {
    jest: true,
  },
};
