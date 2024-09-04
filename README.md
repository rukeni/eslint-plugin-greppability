# eslint-plugin-greppability

ESLint plugin to improve code greppability and maintain consistent vocabulary.

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
