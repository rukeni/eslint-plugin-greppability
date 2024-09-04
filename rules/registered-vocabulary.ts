import { ESLintUtils } from '@typescript-eslint/utils'

const createRule = ESLintUtils.RuleCreator(
  name => `https://github.com/rukeni/eslint-plugin-greppability/blob/main/docs/${name}.md`
)

type Options = [{ vocabulary: string[] }]

export default createRule<Options, 'unregisteredWord'>({
  name: 'registered-vocabulary',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Enforce use of registered vocabulary in variable names',
    },
    schema: [
      {
        type: 'object',
        properties: {
          vocabulary: {
            type: 'array',
            items: { type: 'string' },
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      unregisteredWord: 'Variable name contains unregistered word: "{{word}}"',
    },
  },
  defaultOptions: [{ vocabulary: [] }],
  create(context, [options]) {
    const vocabulary = new Set(options.vocabulary)

    function checkName(node: any) {
      const words = node.name.split(/(?=[A-Z])/).map((word: string) => word.toLowerCase())
      for (const word of words) {
        if (!vocabulary.has(word)) {
          context.report({
            node,
            messageId: 'unregisteredWord',
            data: { word },
          })
        }
      }
    }

    return {
      Identifier(node) {
        if (node.parent.type === 'VariableDeclarator' && node.parent.id === node) {
          checkName(node)
        }
      },
    }
  },
})