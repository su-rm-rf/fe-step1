import constants from "@/constants"
import utils from "@/utils"

const todo = (state=[], action) => {
  let newState = []
  switch (action.type) {
    // case constants.TODO_GET_SUCCESS:
    //   return action.res.data
    case constants.TODO_GET:
      return utils.getTodoList()
    case constants.TODO_CLEAR:
      utils.clearTodoList()
      return []
    case constants.TODO_ADD:
      let uuid = utils.getTodoList().length
      newState = [
        ...state,
        {
          id: 'uuid_' + uuid++,
          text: action.payload.text,
          completed: false
        }
      ]
      utils.setTodoList(newState)
      return newState
    case constants.TODO_TOGGLE:
      newState = state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
      utils.setTodoList(newState)
      return newState
    default:
      return state
  }
}

export default todo