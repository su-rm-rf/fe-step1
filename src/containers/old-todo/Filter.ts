import { connect } from "react-redux"

import { todo_filter } from "@/store/actions/old-todo"
import Filter from '@/components/old-todo/Filter'

const mapStateToProps = state => ({
  type: state.filter
})

const mapDispatchToProps = dispatch => ({
  do_filter: (type) => dispatch(todo_filter(type))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter)