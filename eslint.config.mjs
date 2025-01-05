import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Keep existing Next.js and TypeScript config
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Add the new ESLint configurations you need
  "standard",
  "plugin:tailwindcss/recommended",
  "prettier",

  // Add custom rules
  {
    rules: {
      "no-undef": "off", // Custom rule to turn off "no-undef"
    },
  },
];

export default eslintConfig;
