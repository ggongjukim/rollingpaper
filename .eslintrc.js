module.exports = {
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'plugin:react/recommended',
    ],
    overrides: [
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        "react/prop-types": 0
    },
   parser : "@babel/eslint-parser"
    
  };