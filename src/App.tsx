import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Users from './pages/Users'
import Dashboard from './pages/Dashboard'
import Sales from './pages/Sales'
import { PrivateRoute, PublicRoute } from './components/ProtectedRoutes'

function App() {
  return (
    <Routes>
      {/* Private Route */}
      <Route
        path='/'
        element={
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        }
      />
      {/* Public Route */}
      <Route
        path='/login'
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      {/* Public Route */}
      <Route
        path='/signup'
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />
      {/* Private Route */}
      <Route
        path='/dashboard'
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      {/* Private Route */}
      <Route
        path='/sales'
        element={
          <PrivateRoute>
            <Sales />
          </PrivateRoute>
        }
      />
      {/* Catch all Routes */}
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}

export default App
