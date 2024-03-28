import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './routes/Dashboard.tsx'
import Login from './routes/login.tsx'
import Signup from './routes/signup.tsx'
import ProtegerRuta from './routes/ProtegerRuta.tsx'
import { AuthProvider } from './auth/AuthProvider.tsx'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/",
      element: <ProtegerRuta/>,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />
        },
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}  />
    </AuthProvider>
  </React.StrictMode>,
)
