import { baseQueryWithReauth } from '@api/apiSlice'
import { createApi } from '@reduxjs/toolkit/dist/query'
import { FormLogin, ResponseLogin } from '@type/auth'

export const authApiSlice = createApi({
  reducerPath: 'authApiReducer',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    addPost: builder.mutation<ResponseLogin, FormLogin>({
      query: (body) => ({
        url: `/login`,
        method: 'POST',
        body
      })
    })
  })
})
