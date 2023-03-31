import React from 'react'

import Add from '@/containers/old-todo/Add'
import Filter from '@/containers/old-todo/Filter'
import List from '@/containers/old-todo/List'

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