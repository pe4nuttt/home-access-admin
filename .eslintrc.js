module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        // add more generic rulesets here, such as:
        'eslint:recommended',
        // 'plugin:vue/recommended',
        'plugin:vue/recommended', // Use this if you are using Vue.js 2.x.
    ],
    parserOptions: {
        parser: '@babel/eslint-parser',
    },
    rules: {
        'no-unused-vars': 'off',
        'no-console': 'off',
        // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
        'vue/html-self-closing': 'off', //<input></input>
        'vue/no-parsing-error': [
            0,
            {
                //<input></input>
                'x-invalid-end-tag': false,
            },
        ],
        'no-unexpected-multiline': 'error',
        'vue/multi-word-component-names': 'off',
        indent: 'off',
        'vue/html-indent': 'off',
        'vue/max-attributes-per-line': [
            2,
            {
                singleline: 10,
                multiline: {
                    max: 1,
                },
            },
        ],
    },
};
