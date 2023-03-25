import React from 'react'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import store from '@/store'
import router from '@/router'
import '@/style'

createRoot(document.querySelector('#root') as HTMLElement)
.render(
  <Provider store={ store }>
    <RouterProvider router={router} />
  </Provider>
)