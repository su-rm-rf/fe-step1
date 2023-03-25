import { connect } from "react-redux"

import { todo_clear, todo_get, todo_toggle } from '@/actions'
import List from '@/components/todo/List'
import constants from "@/constants"

const getList = (list, filter) => {
  switch (filter) {
    case constants.SHOW_ALL:
      return list
    case constants.SHOW_COMPLETED:
      return list.filter(todo => todo.completed)
    case constants.SHOW_INCOMPLETE:
      return list.filter(todo => !todo.completed)
    default:
      return new Error(`Unknown filter: ${ filter }`)
  }
}

const mapStateToProps = (state) => ({
  todoList: getList(state.todo, state.filter)
})

const mapDispatchToProps = (dispatch) => ({
  do_get: () => dispatch(todo_get(dispatch)),
  do_clear: () => dispatch(todo_clear()),
  do_toggle: id => dispatch(todo_toggle(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List)