import globals from "globals";
import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    ignores: ["node_modules/", "dist/", "*.min.js"]
  },
  js.configs.recommended,
  prettierConfig,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser
      }
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "no-console": "off"
    }
  }
];
