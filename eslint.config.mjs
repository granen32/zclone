import globals from "globals";
import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  // JavaScript 파일을 위한 기본 설정
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021
      }
    },
    plugins: {
      "react": reactPlugin
    },
    settings: {
      react: {
        version: "detect"
      },
      jsx: true
    },
    rules: {
      "quotes": ["error", "single"],
      "no-unused-vars": "warn",
      "no-console": "warn",
      "no-undef": "error",
      "semi": ["error", "always"],
      "react/react-in-jsx-scope": "off"
    }
  },
  // TypeScript 파일을 위한 설정
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json"
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        React: "readonly"
      }
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "react": reactPlugin
    },
    settings: {
      react: {
        version: "detect"
      },
      jsx: true
    },
    rules: {
      "quotes": ["error", "single"],
      "no-unused-vars": "off",
      "no-console": "warn",
      "no-undef": "off",
      "semi": ["error", "always"],
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-require-imports": "off"
    }
  }
];