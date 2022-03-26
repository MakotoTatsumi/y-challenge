module.exports = {
  plugins: ["react", "react-hooks"],
  extends: ["plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/jsx-props-no-spreading": OFF,
    "react/prop-types": OFF,
    "react/jsx-fragments": [ERROR, "element"],
  },
}
