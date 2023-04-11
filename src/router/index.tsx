import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouteObject } from 'react-router-dom'

// import App from '@/App'
// import Dashboard from '@/components/Dashboard'
// import OfflineTodo from '@/components/offline-todo'
// import OldTodo from '@/components/old-todo'
// import About from '@/components/About'

const App = lazy(() => import('@/App'))
const Dashboard = lazy(() => import('@/components/Dashboard'))
const OfflineTodo = lazy(() => import('@/components/offline-todo'))
const OldTodo = lazy(() => import('@/components/old-todo'))
const About = lazy(() => import('@/components/About'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Suspense><Dashboard /></Suspense>
      },
      {
        path: 'offline-todo',
        element: <Suspense><OfflineTodo /></Suspense>
      },
      {
        path: 'todo',
        element: <Suspense><OldTodo /></Suspense>
      },
      {
        path: 'about',
        element: <Suspense><About /></Suspense>
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