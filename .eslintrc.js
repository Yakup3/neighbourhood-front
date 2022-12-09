module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "google",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "require-jsdoc": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": 0,
  },
  settings: {
    react: {
      version: "latest",
    },
  },
};
