import { connect } from "react-redux"

import { todo_filter } from "@/store/actions/offline-todo"
import Filter from '@/components/offline-todo/Filter'

const mapStateToProps = state => ({
  type: state.offline_filter
})

const mapDispatchToProps = dispatch => ({
  do_filter: (type) => dispatch(todo_filter(type))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter)