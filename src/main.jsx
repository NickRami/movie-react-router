import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { router } from './router/index.jsx'
import { Home } from './pages/Home.jsx'
import UseProvider from './pages/Context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseProvider>

    <RouterProvider router={router}>
   </RouterProvider>

    </UseProvider>
   
  </StrictMode>,
)
