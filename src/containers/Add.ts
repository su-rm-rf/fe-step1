import { todo_add } from './../actions/index';
import { connect } from "react-redux"

import Add from '@/components/todo/Add'

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  add: (text) => dispatch(todo_add(text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Add)