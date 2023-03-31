import React, { useEffect } from 'react'

const TodoList = ({ do_get, do_clear, todoList, do_toggle }) => {

  useEffect(() => {
    do_get()
  }, [])

  const clear = () => {
    do_clear()
  }

  return (
    <div className="todo-list">
      <ul>
        {
          todoList.map(todo => 
            <li key={ todo.id } 
              className={ todo.completed ? 'completed' : '' }
              onClick={ () => do_toggle(todo.id) }
            >
              { todo.text }
            </li>
          )
        }
      </ul>
      <button onClick={ clear }>One Key Clear</button>
    </div>
  )
}

export default TodoList