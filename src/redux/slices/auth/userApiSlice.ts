import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '@api/apiSlice'
import { ResponseGetUser } from '~/type/auth'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getUser: builder.query<ResponseGetUser, void>({
      query: () => '/auth/user'
    }),
    logout: builder.query<boolean, void>({
      query: () => '/auth/logout'
    })
  })
})

export const { useGetUserQuery, useLazyGetUserQuery, useLazyLogoutQuery } =
  userApi
