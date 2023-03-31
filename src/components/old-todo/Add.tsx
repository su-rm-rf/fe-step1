import React, { createRef } from 'react'

const TodoAdd = ({ do_add }) => {
  const text = createRef<HTMLTextAreaElement>()

  const todo_add = () => {
    const value = text.current.value
    if (value) {
      do_add(value)
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