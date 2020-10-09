module.exports = {
  extends: ['airbnb-typescript/base', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    'no-undef': 'off',
    'no-useless-constructor': 'off',
    'class-methods-use-this': 'off',
    'no-else-return': 'off',
    'no-unused-vars': ['error', { args: 'none' }],
    'import/prefer-default-export': 'off',
    'prefer-destructuring': 'off',
    'no-cond-assign': 'off',
    'no-return-assign': 'off',
    '@typescript-eslint/dot-notation': 'off'
  },
};
