module.exports = {
    root: true,
    parserOptions: {
      sourceType: 'module'
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'eslint-config-alloy/react',
    // required to lint *.vue files
    plugins: [
        'react',
        'typescript'
    ],
    parser: "typescript-eslint-parser",
    globals: {

    },
    rules: {
       'indent': [
            'error',
            2,
            {
                SwitchCase: 1,
                flatTernaryExpressions: true
            }
        ],
        'no-undef': 0
    }
}