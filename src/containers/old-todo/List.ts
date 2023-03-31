import { connect } from "react-redux"

import { todo_clear, todo_get, todo_toggle } from '@/store/actions/old-todo'
import List from '@/components/old-todo/List'
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

const mapStateToProps = state => ({
  todoList: getList(state.todo, state.filter)
})

const mapDispatchToProps = dispatch => ({
  do_get: () => dispatch(todo_get()),
  do_toggle: todo => dispatch(todo_toggle(todo)),
  do_clear: () => dispatch(todo_clear()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List)