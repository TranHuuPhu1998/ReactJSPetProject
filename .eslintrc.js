module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    ecmaFeatures: {
      "experimentalObjectRestSpread": true
    }
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    'react/react-in-jsx-scope': 0,
    'no-underscore-dangle': 0,
    'prefer-template': 0,
    'no-unused-vars': 0,
    'consistent-return': 0,
    'no-return-await': 0,
    'no-param-reassign': 0,
    'import/no-cycle': 0,
    'no-unused-expressions': 0,
    'no-console': 1,
    'jsx-a11y/anchor-is-valid': 0,
    camelcase: 0,

    // React
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-curly-brace-presence': 0,
    'no-use-before-define': 0,

    // Typescript

    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-empty-interface': 2,
    "@typescript-eslint/no-explicit-any": "off"
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
