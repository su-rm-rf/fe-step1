import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <nav className="nav-header">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/offline-todo">单机版Todo</NavLink>
        <NavLink to="/todo">Todo</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <div className="content-body">
        <Outlet />
      </div>
    </div>
  )
}
export default App