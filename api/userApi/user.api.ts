import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_DOMAIN_URL } from '../../lib/constants'
import { IBaseQuery, ILoginData } from './user.api.types'

export const userApi = createApi({
  reducerPath: 'userApi',
  refetchOnFocus: true,
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({ baseUrl: `${API_DOMAIN_URL}/api/v2/` }),
  endpoints: (build) => ({
    login: build.mutation<ILoginData, Partial<ILoginData>>({
      query(data) {
        const { ...body } = data
        return {
          url: 'login',
          method: 'POST',
          body,
        }
      },
    }),
    // getUserByEmail: build.query<IBaseQuery, string>({
    //   query: (email) => `users/email/${email}`,
    // }),
    // getUserById: build.query<IBaseQuery, string>({
    //   query: (id) => `users/${id}`,
    // }),
  }),
})

export const {
  useLoginMutation,
  // useGetUserByEmailQuery,
  // useGetUserByIdQuery,
} = userApi
