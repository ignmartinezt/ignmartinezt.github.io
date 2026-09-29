import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './pages/App.jsx'
import Mensaje from './pages/Mensaje.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/mensaje', element: <Mensaje /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
