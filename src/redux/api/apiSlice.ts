import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// create root api slice
const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in/'
  }),
  tagTypes: [],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: _builder => ({})
})

export default apiSlice
