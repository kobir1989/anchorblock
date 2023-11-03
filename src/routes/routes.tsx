import { createBrowserRouter } from 'react-router-dom'
import Users from '../pages/Users'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import Sales from '../pages/Sales'

export const router = createBrowserRouter([
  {
    path: '/users',
    element: <Users />
  },
  {
    path: '/', // home
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/sales',
    element: <Sales />
  }
])
