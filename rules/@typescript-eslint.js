module.exports = {
  parser: "@typescript-eslint/parser",

  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true
    }
  },

  plugins: ["@typescript-eslint"],

  extends: ["plugin:@typescript-eslint/recommended"],

  rules: {
    "@typescript-eslint/ban-ts-ignore": "warn",
    "@typescript-eslint/func-call-spacing": ["error"],
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/no-explicit-any": "error",
    // "@typescript-eslint/no-extra-parens": ["error"], WAIT to @typescript-eslint/eslint-plugin version 1.9.1
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-this-alias": "error",
    // "@typescript-eslint/no-type-alias": "error", добавить позже
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-regexp-exec": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/unbound-method": "error",
    "@typescript-eslint/unified-signatures": "error"
  },

  settings: {
    // https://github.com/alexgorbatchev/eslint-import-resolver-typescript#configuration
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {}
    }
  }
};