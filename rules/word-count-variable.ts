import { ESLintUtils } from '@typescript-eslint/utils'

const createRule = ESLintUtils.RuleCreator(
  name => `https://github.com/rukeni/eslint-plugin-greppability/blob/main/docs/${name}.md`
)

type Options = [{ wordCount: number }]

export default createRule<Options, 'invalidWordCount'>({
  name: 'word-count-variable',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Enforce specific word count in variable names',
      
      // recommended: 'error',
    },
    schema: [
      {
        type: 'object',
        properties: {
          wordCount: {
            type: 'number',
            minimum: 1,
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      invalidWordCount: 'Variable names should be {{wordCount}} word(s). Found: {{actualCount}}.',
    },
  },
  defaultOptions: [{ wordCount: 2 }],
  create(context, [options]) {
    const { wordCount } = options
    return {
      Identifier(node) {
        if (node.parent.type === 'VariableDeclarator' && node.parent.id === node) {
          const words = node.name.split(/(?=[A-Z])/)
          if (words.length !== wordCount) {
            context.report({
              node,
              messageId: 'invalidWordCount',
              data: {
                wordCount,
                actualCount: words.length,
              },
            })
          }
        }
      },
    }
  },
})