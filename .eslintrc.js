module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "eslint:recommended", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["jest", "import", "eslint-plugin-html"],
  rules: {
    "max-len": ["error", { ignoreComments: true, code: 150 }],
    "no-plusplus": "off",
    "import/prefer-default-export": "off",
  },
  settings: {
    "import/extensions": [".js"],
    "html/html-extensions": [".html"],
  },
};
