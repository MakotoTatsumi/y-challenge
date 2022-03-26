module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  extends: [
    "eslint:recommended",
    "next",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "./configs/eslint/import",
    "./configs/eslint/react",
    "prettier",
  ],
  ignorePatterns: [".next", "**/libs/**"],
}
