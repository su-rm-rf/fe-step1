import { connect } from "react-redux"

import { todo_clear, todo_get, todo_toggle } from '@/store/actions/offline-todo'
import List from '@/components/offline-todo/List'
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
  todoList: getList(state.offline_todo, state.offline_filter)
})

const mapDispatchToProps = dispatch => ({
  do_get: () => dispatch(todo_get()),
  do_toggle: id => dispatch(todo_toggle(id)),
  do_clear: () => dispatch(todo_clear()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List)