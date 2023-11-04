import apiSlice from '../../api/apiSlice'
import { loggedIn } from './authSlice'

export const authApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      //Login mutation
      query: data => ({
        url: '/api/login',
        method: 'POST',
        body: data
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const response = await queryFulfilled
          // save token to localstorage.
          localStorage.setItem('token', JSON.stringify(response?.data?.token))
          dispatch(
            loggedIn({
              token: response?.data?.token
              // api response has only token.
            })
          )
        } catch (error) {
          //  console.log(error)
        }
      }
    }),

    signup: builder.mutation({
      //signup mutation
      query: data => ({
        url: '/api/signup',
        method: 'POST',
        body: data
      })
      // ***** Sign up end points not sending any token ************
      // async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
      //   try {
      //     const response = await queryFulfilled
      //     // save token to localstorage.
      //     localStorage.setItem('token', JSON.stringify(response?.data?.token))
      //     dispatch(
      //       loggedIn({
      //         token: response?.data?.token
      //       })
      //     )
      //   } catch (error) {
      //     //  console.log(error)
      //   }
      // }
    })
  })
})

export const { useLoginMutation, useSignupMutation } = authApi
