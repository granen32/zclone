import globals from "globals";
import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import nextPlugin from "@next/eslint-plugin-next";


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
      "react": reactPlugin,
      "next": nextPlugin
    },
    settings: {
      react: {
        version: "detect"
      },
      next: {
        rootDir: "."
      },
      jsx: true
    },
    rules: {
      "quotes": ["error", "single"],
      "no-unused-vars": "warn",
      "no-console": "warn",
      "no-undef": "error",
      "semi": ["error", "always"],
      "react/react-in-jsx-scope": "off",
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules
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
      "react": reactPlugin,
      "next": nextPlugin
    },
    settings: {
      react: {
        version: "detect"
      },
      next: {
        rootDir: "."
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
      "@typescript-eslint/no-require-imports": "off",
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules
    }
  }
];