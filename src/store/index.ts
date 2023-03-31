import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import logger from 'redux-logger'
// import saga from 'redux-saga'

import { todo_add } from '@/store/actions/offline-todo'
import reducer from "@/store/reducers"

const store = createStore(reducer, 
  applyMiddleware(thunk, logger)
)

store.subscribe(() => console.log(store.getState()))

// const rs = store.dispatch(todo_add(123))
// console.log(rs)

export default store