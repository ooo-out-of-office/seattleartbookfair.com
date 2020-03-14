module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    "react-app",
    "plugin:jsx-a11y/recommended",
    "prettier/babel",
    "prettier/react"
  ],
  globals: {
    React: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react", "jsx-a11y", "react-hooks"],
  rules: {
    "jsx-a11y/no-autofocus": ["error", { ignoreNonDOM: true }],
    "jsx-quotes": [2, "prefer-double"],
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-curly-spacing": ["error", { when: "never" }],
    "react/jsx-no-duplicate-props": ["error", { ignoreCase: false }],
    "react/jsx-no-undef": ["error", { allowGlobals: true }],
    "react/jsx-tag-spacing": ["error", { beforeSelfClosing: "always" }],
    "react/jsx-uses-vars": "warn"
  }
};
