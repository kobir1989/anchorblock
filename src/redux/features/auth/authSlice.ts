import { createSlice } from '@reduxjs/toolkit'

const localToken = localStorage.getItem('token')

const initialState = {
  // get token from localstorage
  token: localToken ? JSON.parse(localToken) : null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      state.token = action.payload.token
    },
    logout: state => {
      state.token = null
      // Remove token from localStorage on logout
      localStorage.removeItem('token')
    }
  }
})

export default authSlice.reducer
export const { logout, loggedIn } = authSlice.actions
