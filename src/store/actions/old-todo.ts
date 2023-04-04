import constants from '@/constants'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8602'

/**
 * List
 */
export const todo_get_start = () => {
  return {
    type: constants.TODO_GET_START
  }
}
export const todo_get = () => {
  return dispatch => {
    dispatch(todo_get_start())
    axios.get('/todo/list').then(res => {
      dispatch(todo_get_success(res.data.data))
    })
  }
}
export const todo_get_success = data => {
  return {
    type: constants.TODO_GET_SUCCESS,
    data
  }
}

/**
 * Add
 */
export const todo_add_start = () => {
  return {
    type: constants.TODO_ADD_START
  }
}
export const todo_add = text => {
  return dispatch => {
    dispatch(todo_add_start)
    axios.post('/todo/add', {
      text,
      completed: 0
    }).then(res => {
      dispatch(todo_add_success(res.data))
      dispatch(todo_get())
    })
  }
}
export const todo_add_success = data => {
  return {
    type: constants.TODO_ADD_SUCCESS,
    data
  }
}

/**
 * Filter
 * @param filter type
 * @returns {}
 */
 export const todo_filter_start = filter => {
  return {
    type: constants.TODO_FILTER_START,
    filter
  }
}
export const todo_filter = filter => {
  return dispatch => {
    dispatch(todo_filter_start(filter))
    axios.get('/todo/list', {
      params: {
        completed: filter
      }
    }).then(res => {
      dispatch(todo_filter_success(res.data.data))
    })
  }
}
export const todo_filter_success = data => {
  return {
    type: constants.TODO_FILTER_SUCCESS,
    data
  }
}

/**
 * Toggle
 */
export const todo_toggle_start = () => {
  return {
    type: constants.TODO_TOGGLE_START,
  }
}
export const todo_toggle = todo => {
  return dispatch => {
    dispatch(todo_toggle_start())
    axios.post('/todo/update', {
      id: todo.id,
      completed: todo.completed === 0 ? 1 : 0
    }).then(res => {
      dispatch(todo_toggle_success(res.data))
      dispatch(todo_get())
    })
  }
}
export const todo_toggle_success = data => {
  return {
    type: constants.TODO_TOGGLE_SUCCESS,
    data
  }
}

/**
 * Clear
 */
export const todo_clear_start = () => {
  return {
    type: constants.TODO_CLEAR_START
  }
}
export const todo_clear = () => {
  return dispatch => {
    dispatch(todo_clear_start())
    axios.post('/todo/clear')
    .then(res => {
      dispatch(todo_clear_success(res.data))
      dispatch(todo_get())
    })
  }
}
export const todo_clear_success = data => {
  return {
    type: constants.TODO_CLEAR_SUCCESS,
    data
  }
}

