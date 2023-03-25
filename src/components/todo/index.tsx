import React from 'react'

import Add from '@/containers/Add'
import Filter from '@/containers/Filter'
import List from '@/containers/List'

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