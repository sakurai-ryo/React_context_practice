module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "prettier"
  ],
  "parserOptions": {
    "version": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  "rules": {
    "prettier/prettier": "error",
    /* jsxを1行で記述しなくてもよくする */
    "react/jsx-one-expression-per-line": 0
  }
}
