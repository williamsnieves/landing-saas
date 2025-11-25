module.exports = {
  extends: ['eslint:recommended', 'plugin:astro/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
  ],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prefer-const': 'error',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};
