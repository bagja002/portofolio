import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // Without eslint-plugin-react, no-unused-vars cannot see identifiers used
      // only in JSX, so component-shaped names are exempted: capitalised imports
      // and params (<Icon />), plus framer-motion's lowercase `motion` namespace.
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^([A-Z_]|motion$)',
          argsIgnorePattern: '^[A-Z_]',
        },
      ],
    },
  },
])
