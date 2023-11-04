import apiSlice from '../../api/apiSlice'

// Users object types
interface Users {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

// api response body types
interface UsersResponseBody {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: Users[] | []
}

export const usersApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUsersList: builder.query<UsersResponseBody, unknown>({
      query: (pageNumber: unknown) => `/api/users?page=${pageNumber}`
    })
  })
})

export const { useGetUsersListQuery } = usersApi
