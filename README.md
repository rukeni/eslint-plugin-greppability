# eslint-plugin-greppability

**⚠️ WARNING: This plugin is currently under development and not yet published to npm. It is not ready for production use. ⚠️**

ESLint plugin to improve code greppability and maintain consistent vocabulary.

## Current Status

This plugin is in active development. Features may change, and it is not yet available on npm. Please check back later for updates on its release status.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install eslint-plugin-greppability:
```sh
npm install eslint-plugin-greppability --save-dev
```

## Usage
Add greppability to the plugins section of your .eslintrc configuration file. You can omit the eslint-plugin- prefix:
```json

{
    "plugins": [
        "greppability"
    ]
}
```

Then configure the rules you want to use under the rules section.
```json
{
    "rules": {
        "greppability/word-count-variable": ["error", { "wordCount": 2 }],
        "greppability/registered-vocabulary": ["error", { "vocabulary": ["user", "name", "age"] }]
    }
}
```

## Rules

### word-count-variable
Enforces a specific word count in variable names.
Options:

`wordCount`: The number of words required in variable names (default: 2)

Example:
```json
{
    "greppability/word-count-variable": ["error", { "wordCount": 2 }]
}
```

### registered-vocabulary
Ensures that variable names only use words from a predefined vocabulary.
Options:

`vocabulary`: An array of allowed words

Example:
```json
{
    "greppability/registered-vocabulary": ["error", { "vocabulary": ["user", "name", "age", "email"] }]
}
```

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
MIT
