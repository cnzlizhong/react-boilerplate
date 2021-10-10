const isProd = process.env.NODE_ENV === 'production';
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb', // Uses the rules from eslint-config-airbnb
        'airbnb/hooks', // Uses the rules for React Hooks from eslint-config-airbnb
        'eslint:recommended', // Uses the recommended rules from eslint standard
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:prettier/recommended', // Uses the recommended rules from eslint-plugin-prettier
    ],
    plugins: ['prettier'],
    parserOptions: {
        ecmaVersion: 12, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        'prettier/prettier': 'warn',
        'no-console': isProd ? 'error' : 'off',
        'linebreak-style': 'off',
        'no-unused-vars': 'off',
        'no-restricted-syntax': 'off',
        'guard-for-in': 'warn',
        'max-classes-per-file': 'off',
        'prefer-template': 'warn',
        'lines-between-class-members': 'warn',
        'no-param-reassign': 'off',
        'new-cap': 'warn',
        'prefer-const': 'warn',
        'no-constant-condition': 'warn',
        'no-shadow': 'off', // replaced in typescript-eslint
        'no-use-before-define': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': [
            // allow omitting file extension on import statements
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
            },
        ],
        'react/prop-types': 'off', // prop types are to be checked with TypeScript
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }], // allow JSX on .jsx and .tsx files
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'react/no-unescaped-entities': 'off',
        'react/require-default-props': 'off',
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    ignorePatterns: ['build/**/*'],
};
