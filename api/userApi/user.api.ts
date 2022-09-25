import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BaseQuery, IUser, AllUsersQuery, ISignUpData } from './user.api.types'

export const userApi = createApi({
  reducerPath: 'userApi',
  refetchOnFocus: true,
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({ baseUrl: `/api/` }),
  endpoints: (build) => ({
    signUp: build.mutation<ISignUpData, Partial<ISignUpData>>({
      query(data) {
        const { ...body } = data
        return {
          url: 'auth/sign-up',
          method: 'POST',
          body,
        }
      },
    }),
    getUserByEmail: build.query<BaseQuery, string>({
      query: (email) => `users/email/${email}`,
    }),
    getUserById: build.query<BaseQuery, string>({
      query: (id) => `users/${id}`,
    }),
    updateUser: build.mutation<IUser, Partial<IUser>>({
      query(data) {
        const { _id, ...body } = data
        return {
          url: `users/${_id}`,
          method: 'PATCH',
          body,
        }
      },
    }),
    getAllUsers: build.query<AllUsersQuery, string>({
      query: () => '/users',
    }),
  }),
})

export const {
  useSignUpMutation,
  useGetUserByEmailQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useGetAllUsersQuery,
} = userApi
