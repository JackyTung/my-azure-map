module.exports = {
  extends: ["airbnb", "airbnb/hooks"],
  plugins: ["import", "simple-import-sort", "react", "react-hooks"],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  rules: {
    quotes: "off",
    "react/prop-types": 0,
    "import/prefer-default-export": 0,
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "simple-import-sort/imports": [
      2,
      {
        groups: [
          // Side effect imports.
          ["^\\u0000"],
          // React, Redux imports
          ["^react", "^redux"],
          // Packages
          // Things that start with a letter (or digit or underscore)
          ["^\\w"],
          // Packages.
          // Things that start with a @. usually @material-ui
          ["^@\\w"],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything that does not start with a dot.
          // Relative imports.
          // Anything that starts with a dot.
          ["^[^.]", "^\\."],
        ],
      },
    ],
  },
  settings: {
    "import/resolver": {
      webpack,
      alias: {
        map: [["@", "./"]],
      },
    },
  },
};
