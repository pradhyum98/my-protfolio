import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import localRules from "./eslint-rules/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "scripts/**",
      "eslint-rules/**",
    ],
  },
  {
    plugins: {
      "local-rules": {
        rules: localRules,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/ban-ts-comment": "warn",
      "react/jsx-no-useless-fragment": ["warn", { allowExpressions: true }],
      "react/no-unescaped-entities": "warn",
      "@next/next/no-html-link-for-pages": "warn",
      "local-rules/no-hardcoded-strings": [
        "warn",
        {
          allowedPatterns: [
            "^[a-z0-9-_]+$", // Short technical identifiers
            "^[A-Z][a-zA-Z0-9]*$", // Component names
          ],
          ignoreFiles: [
            "**/*.test.tsx?",
            "**/*.spec.tsx?",
            "**/content/copy.ts",
            "**/lib/constants.ts",
            "**/lib/projects-data.ts",
            "**/components/ui/**",
            "**/*.config.*",
            "**/tailwind.config.*",
            "**/postcss.config.*",
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
