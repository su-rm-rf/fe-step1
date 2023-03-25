import React, { createRef } from 'react'

const TodoAdd = ({ add }) => {
  const text = createRef<HTMLTextAreaElement>()

  const todo_add = () => {
    let value = text.current.value
    if (value) {
      add(value)
      text.current.value = ''
    }
  }

  return (
    <div className="todo-add">
      {/* <input ref={ text } /> */}
      <textarea ref={ text }></textarea>
      <button onClick={ todo_add }>Add</button>
    </div>
  )
}

export default TodoAdd