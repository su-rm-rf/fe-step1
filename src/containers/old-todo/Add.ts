import { connect } from "react-redux"

import { todo_add } from '@/store/actions/old-todo'
import Add from '@/components/old-todo/Add'

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  do_add: (text) => dispatch(todo_add(text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Add)