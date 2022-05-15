module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        "airbnb-base",
        "airbnb-typescript/base",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:eslint-comments/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.eslint.json",
    },
    plugins: ["@typescript-eslint", "eslint-comments", "import", "prettier", "jest", "promise"],
    rules: {
        "prettier/prettier": "error",
        "import/extensions": "off",
        "no-console": "off",
        "import/prefer-default-export": "off",
        "import/no-default-export": "error",
        "no-use-before-define": [
            "error",
            {
                functions: false,
                classes: true,
                variables: true,
            },
        ],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-use-before-define": [
            "error",
            {
                functions: false,
                classes: true,
                variables: true,
                typedefs: true,
            },
        ],
        "import/no-extraneous-dependencies": "off",
    },
    settings: {
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
                project: "./tsconfig.json",
            },
        },
    },
};
