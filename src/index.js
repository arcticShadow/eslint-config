module.exports = {
  // The Configs that we have chosen to extend
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:sonarjs/recommended",
  ],
  env: {
    es2021: true,
  },

  // prettier, sonarjs plugin should be registered - but the recommended extension handles that for us
  plugins: ["@typescript-eslint"],

  overrides: [
    // Globally allow require in *.js files
    {
      files: ["*.js"],
      rules: {
        // "quotes": ["error", "single"]
        "@typescript-eslint/no-var-requires": 0,
      },
    },
  ],
  parser: "@typescript-eslint/parser",

  parserOptions: {
    sourceType: "module",
  }
};
