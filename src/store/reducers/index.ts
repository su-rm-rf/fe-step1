import { combineReducers } from 'redux'

import offline_todo from './offline-todo'
import offline_filter from './offline-todo/filter'

import old_todo from './old-todo'
import old_filter from './old-todo/filter'

import todo from './old-todo'
import filter from './old-todo/filter'

const reducer = combineReducers({
  offline_todo,
  offline_filter,

  old_todo,
  old_filter,

  todo,
  filter,
})

export default reducer