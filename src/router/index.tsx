import React from 'react'
import { createBrowserRouter, RouteObject } from 'react-router-dom'

import App from '@/App'
import Dashboard from '@/components/Dashboard'
import Todo from '@/components/todo'
import About from '@/components/About'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Dashboard />
      },
      {
        path: 'offline-todo',
        element: <Todo />
      },
      {
        path: 'online-todo',
        element: <Todo />
      },
      {
        path: 'about',
        element: <About />
      },
    ]
  }
]

const router = createBrowserRouter(routes, {
  basename: ''
})

export default router