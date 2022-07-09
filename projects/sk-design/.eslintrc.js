module.exports = {
  extends: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '?': 'ignore',
          ':': 'ignore',
        },
      },
    ],
    'linebreak-style': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'import/no-extraneous-dependencies': 0,
    'react/static-property-placement': 0,
    'react/no-unused-prop-types': 0,
    'import/no-named-as-default-member': 0,
    'import/no-cycle': 0,
    'import/no-named-as-default': 0,
    'import/export': 0,
    semi: 2,
    'comma-dangle': 2,
    '@typescript-eslint/dot-notation': 0,
    '@typescript-eslint/keyword-spacing': 0,
    '@typescript-eslint/lines-between-class-members': 0,
    '@typescript-eslint/no-explicit-any': 2,
    'object-curly-spacing': ["error", "always"],
    'no-console': 1,
    'react/jsx-props-no-spreading': 0,
    'react/react-in-jsx-scope': 0,
    'arrow-body-style': 0,
    'object-curly-newline': 0,
    'implicit-arrow-linebreak': 1,
    'max-len': 0,
    'no-shadow': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/indent': 0,
    'object-curly-spacing': 0,
    "indent": ["error", 2]
  },
  overrides: [
    {
      files: ['src/store/**'],
      rules: {
        'import/prefer-default-export': 0,
      },
    },
  ],
  ignorePatterns: '*.js',
  env: {
    browser: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  plugins: ['react', 'import', 'react-hooks', 'jest', '@typescript-eslint'],
};
