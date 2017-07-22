module.exports = {
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: 7, // This option is for syntax only.
        sourceType: "module"
    },
    env: {
        es6: true   // This option deals with libraries, such as Map, Set, etc.
    }
};