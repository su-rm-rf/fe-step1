const setTodoList = (list) => {
  localStorage.setItem('todo_list', JSON.stringify(list))
}

const getTodoList = () => {
  return JSON.parse(localStorage.getItem('todo_list')) || []
}

const clearTodoList = () => {
  return localStorage.removeItem('todo_list')
}

export default {
  setTodoList,
  getTodoList,
  clearTodoList,
}