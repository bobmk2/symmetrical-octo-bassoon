module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['node_modules/', 'webpack.dev.conf.js', 'webpack.prod.conf.js', '.eslintrc.js', 'dist'],
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'react/prop-types': [2],
    'react/jsx-uses-react': [1],
    'react/jsx-uses-vars': [2],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
    'no-prototype-builtins': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/no-use-before-define': 'off'
  },
  parser: '@typescript-eslint/parser',
  env: { es6: true },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
