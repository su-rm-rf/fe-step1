import constants from '@/constants'
import axios from 'axios'

export const todo_add = text => {
  return {
    type: constants.TODO_ADD,
    payload: {
      text
    }
  }
}
export const todo_add_success = text => {
  return {
    type: constants.TODO_ADD_SUCCESS
  }
}

export const todo_toggle = id => {
  return {
    type: constants.TODO_TOGGLE,
    id
  }
}

export const todo_filter = filter => {
  return {
    type: constants.TODO_FILTER,
    filter
  }
}

export const todo_clear = () => {
  return {
    type: constants.TODO_CLEAR
  }
}

// export const todo_get_start = () => {
//   return {
//     type: constants.TODO_GET_START
//   }
// }

export const todo_get = (dispatch) => {
  return {
    type: constants.TODO_GET
  }
}
// export const todo_get = (dispatch) => {
//   return dispatch => {
//     dispatch(todo_get_start)
//     axios.get('http://localhost:8602').then(res => {
//       dispatch(todo_get_success(res))
//     })
//   }
// }

export const todo_get_success = (res) => {
  return {
    type: constants.TODO_GET_SUCCESS,
    res
  }
}