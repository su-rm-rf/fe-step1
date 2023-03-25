import React from 'react'
import { Link, Outlet } from 'react-router-dom'

interface A {
  name: String
}

const App = () => {
  return (
    <div className="app">
      <div className="nav-header">
        <Link to="/">Home</Link>
        <Link to="/offline-todo">Offline</Link>
        <Link to="/online-todo">Online</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="content-body">
        <Outlet />
      </div>
    </div>
  )
}
export default App