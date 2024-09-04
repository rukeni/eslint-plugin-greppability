import { RuleTester } from '@typescript-eslint/rule-tester'
import { describe, it, afterAll } from 'vitest'
import rule from '../rules/registered-vocabulary'

RuleTester.afterAll = afterAll;

// If you are not using vitest with globals: true (https://vitest.dev/config/#globals):
RuleTester.it = it;
RuleTester.itOnly = it.only;
RuleTester.describe = describe;

const ruleTester = new RuleTester();

describe('registered-vocabulary', () => {
  it('runs test', () => {
    ruleTester.run('registered-vocabulary', rule, {
      valid: [
        {
          code: 'const userName = "John"',
          options: [{ vocabulary: ['user', 'name'] }],
        },
        {
          code: 'let firstName = "John"',
          options: [{ vocabulary: ['first', 'name'] }],
        },
        {
          code: 'var userAge = 30',
          options: [{ vocabulary: ['user', 'age'] }],
        },
      ],
      invalid: [
        {
          code: 'const userName = "John"',
          options: [{ vocabulary: ['user'] }],
          errors: [{ messageId: 'unregisteredWord', data: { word: 'name' } }],
        },
        {
          code: 'let firstName = "John"',
          options: [{ vocabulary: ['name'] }],
          errors: [{ messageId: 'unregisteredWord', data: { word: 'first' } }],
        },
        {
          code: 'var userAge = 30',
          options: [{ vocabulary: ['user', 'name'] }],
          errors: [{ messageId: 'unregisteredWord', data: { word: 'age' } }],
        },
      ],
    })
  })
})