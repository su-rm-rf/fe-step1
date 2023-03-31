import React from 'react'

import Add from '@/containers/offline-todo/Add'
import Filter from '@/containers/offline-todo/Filter'
import List from '@/containers/offline-todo/List'

const Todo = () => {
  return (
    <div className="todo-app">
      <Add />
      <Filter />
      <List />
    </div>
  )
}

export default Todo