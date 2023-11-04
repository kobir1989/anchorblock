import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Navigate, Outlet } from 'react-router-dom'
import { ChildrenType } from '../types/globalTypes'

//Protected route
export const PrivateRoute = ({ children }: ChildrenType) => {
  const { token } = useSelector((state: RootState) => state.auth)

  if (token) {
    return (
      <>
        {children}
        <Outlet />
      </>
    )
  }
  return <Navigate to='/login' replace />
}

//UnProtected route loged in user can't access (login and signup route )
export const PublicRoute = ({ children }: ChildrenType) => {
  const { token } = useSelector((state: RootState) => state.auth)

  return !token ? (
    <>
      {children}
      <Outlet />
    </>
  ) : (
    <Navigate to='/' replace />
  )
}
