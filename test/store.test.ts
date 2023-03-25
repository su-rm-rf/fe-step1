import { test, expect } from '@jest/globals'

import store from '@/store'
import constants from '@/constants'
import { todo_add } from '@/actions'

test('1+1=2', () => {
  expect(store.dispatch(todo_add(123))).toBe({
    type: constants.TODO_ADD,
    payload: {
      text: 123
    }
  })
})