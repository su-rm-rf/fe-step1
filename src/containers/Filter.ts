import { connect } from "react-redux"

import Filter from '@/components/todo/Filter'
import { todo_filter } from "@/actions"

const mapStateToProps = state => ({
  type: state.filter
})

const mapDispatchToProps = (dispatch) => ({
  do_filter: (type) => dispatch(todo_filter(type))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter)