import path from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:i18next/recommended"
  ),
  {
    plugins: {
      "@typescript-eslint": typescriptEslint,
      react,
      import: importPlugin,
      "react-hooks": reactHooks,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        __IS_DEV__: true,
      },

      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },

    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "react/react-in-jsx-scope": "off", // обязательный импорт React
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      // "reac/jsx-indent": [2, 2],
      // "reac/jsx-indent-props": [2, 2],
      // indent: [2, 2],
      // "no-unused-vars": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/no-deprecated": "warn",
      "i18next/no-literal-string": ["error", { markUpOnly: true, ignoreAttribute: ["data-testid", "to"] }],
      "import/order": [
        "error",
        {
          groups: [
            "builtin", // Встроенные модули Node.js (fs, path и т.д.)
            "external", // Внешние библиотеки (node_modules)
            // "internal", // Абсолютные импорты внутри проекта
            ["internal", "parent", "sibling", "index"], // Локальные файлы
          ],
          "newlines-between": "always-and-inside-groups", // Всегда разделять группы пустой строкой
          alphabetize: {
            order: "asc", // Сортировать по алфавиту
            caseInsensitive: true, // Игнорировать регистр
          },
        },
      ],
    },
    overrides: [
      {
        files: ["**/src/**/*.test.{ts, tsx}"],
        rules: {
          "i18next/no-literal-string": "off",
        },
      },
    ],
  },
];
