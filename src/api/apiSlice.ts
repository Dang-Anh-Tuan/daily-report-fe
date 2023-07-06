import { logout, setCredentials } from '@redux/slices/auth/authSlice'
import { RootState } from '@redux/store'
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react'
import { ResponseLogin } from '@type/auth'
import { saveLocalToken } from '@utils/auth'

const baseQuery = fetchBaseQuery({
  baseUrl:
    import.meta.env.VITE_ENV !== 'production'
      ? import.meta.env.VITE_BASE_URL_PRODUCT
      : import.meta.env.VITE_BASE_URL_DEVELOP,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  }
})

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result.error?.status === 401) {
    //  Sending refresh token
    const refreshToken = localStorage.getItem('refresh_token')
    const refreshResult = await baseQuery(
      {
        url: 'auth/refresh',
        method: 'POST',
        body: JSON.stringify({ refreshToken: refreshToken })
      },
      api,
      extraOptions
    )
    if (refreshResult.data) {
      const data = refreshResult.data as ResponseLogin

      saveLocalToken(data.accessToken, data.refreshToken)

      const user = (api.getState() as RootState).auth.user
      // TODO : May be should call info user again
      const credentials = {
        user,
        token: (data as { accessToken: string }).accessToken as
          | string
          | null
          | undefined
      }
      api.dispatch(setCredentials(credentials))

      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logout())
    }
  }
  return result
}

export { baseQuery, baseQueryWithReauth }
