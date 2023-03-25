import React from 'react'
import constants from '@/constants'

const FilterItem = ({ item, type, do_filter }) => {
  return (
    <li className={ type === item ? 'actived' : '' }
        onClick={ () => do_filter(item) }
      >{ item }</li>
  )
}

const TodoFilter = (props) => {
  return (
    <ul className="todo-filter">
      <FilterItem item={constants.SHOW_ALL} { ...props } />
      <FilterItem item={constants.SHOW_COMPLETED} { ...props } />
      <FilterItem item={constants.SHOW_INCOMPLETE} { ...props } />
    </ul>
  )
}

export default TodoFilter