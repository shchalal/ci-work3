module.exports = {
  root: true,
  ignorePatterns: ['coverage', 'dist', 'node_modules'],
  env: { browser: true, es2021: true, node: true },
  extends: ['eslint:recommended'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  overrides: [
    {
      files: ['**/*.test.js', '**/__tests__/**/*.js'],
      env: { jest: true },
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: { 'jest/prefer-expect-assertions': 'off' }
    }
  ],
  rules: {}
};

