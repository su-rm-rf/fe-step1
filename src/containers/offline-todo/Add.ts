import { connect } from "react-redux"

import { todo_add } from '@/store/actions/offline-todo'
import Add from '@/components/offline-todo/Add'

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  do_add: (text) => dispatch(todo_add(text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Add)