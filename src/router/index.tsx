import React from 'react'
import { createBrowserRouter, RouteObject } from 'react-router-dom'

import App from '@/App'
import Dashboard from '@/components/Dashboard'
import OfflineTodo from '@/components/offline-todo'
import OldTodo from '@/components/old-todo'
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
        element: <OfflineTodo />
      },
      {
        path: 'old-todo',
        element: <OldTodo />
      },
      {
        path: 'todo',
        element: <Todo />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: '*',
        element: <div>404</div>
      }
    ]
  }
]

const router = createBrowserRouter(routes, {
  basename: ''
})

export default router