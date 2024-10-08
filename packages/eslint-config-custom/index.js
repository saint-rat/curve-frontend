module.exports = {
  extends: ['next', 'turbo', 'prettier', "@feature-sliced"],
  plugins: ['@tanstack/query'],
  rules: {
    '@next/next/no-img-element': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'import/no-internal-modules': 'info',
    'import/order': 'info',
    'boundaries/element-types': 'info'
  },
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
}
