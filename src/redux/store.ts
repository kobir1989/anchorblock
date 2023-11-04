import { configureStore } from '@reduxjs/toolkit'
import apiSlice from './api/apiSlice'
import authSlice from './features/auth/authSlice'

// create store
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice
  },
  // Concatenate the default middleware with apiSlice middleware
  middleware: getDefaultMiddlewares =>
    getDefaultMiddlewares({ serializableCheck: false }).concat(
      apiSlice.middleware
    )
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
