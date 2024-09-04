import { RuleTester } from '@typescript-eslint/rule-tester'
import { describe, it, afterAll, } from 'vitest'
import rule from '../rules/word-count-variable'

RuleTester.afterAll = afterAll;

// If you are not using vitest with globals: true (https://vitest.dev/config/#globals):
RuleTester.it = it;
RuleTester.itOnly = it.only;
RuleTester.describe = describe;

const ruleTester = new RuleTester();

describe('word-count-variable', () => {
  it('runs test', () => {
    ruleTester.run('word-count-variable', rule, {
      valid: [
        { code: 'const userName = "John"', options: [{ wordCount: 2 }] },
        { code: 'let firstName = "John"', options: [{ wordCount: 2 }] },
        { code: 'var lastLoginDate = new Date()', options: [{ wordCount: 3 }] },
      ],
      invalid: [
        {
          code: 'const name = "John"',
          options: [{ wordCount: 2 }],
          errors: [{ messageId: 'invalidWordCount' }],
        },
        {
          code: 'let userFirstName = "John"',
          options: [{ wordCount: 2 }],
          errors: [{ messageId: 'invalidWordCount' }],
        },
        {
          code: 'var loginDate = new Date()',
          options: [{ wordCount: 3 }],
          errors: [{ messageId: 'invalidWordCount' }],
        },
      ],
    })
  })
})