import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import log from 'redux-log'
import saga from 'redux-saga'

import { todo_add } from '@/actions'
import reducer from "@/reducers"

const store = createStore(reducer, 
  applyMiddleware(thunk)
)

store.subscribe(() => console.log(store.getState()))

// store.dispatch(todo_add(123))

export default store