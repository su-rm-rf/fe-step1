import constants from '@/constants'

export const todo_get = () => {
  return {
    type: constants.TODO_GET
  }
}

export const todo_add = text => {
  return {
    type: constants.TODO_ADD,
    payload: {
      text
    }
  }
}

export const todo_filter = filter => {
  return {
    type: constants.TODO_FILTER,
    filter
  }
}

export const todo_toggle = id => {
  return {
    type: constants.TODO_TOGGLE,
    id
  }
}

export const todo_clear = () => {
  return {
    type: constants.TODO_CLEAR
  }
}
