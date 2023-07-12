import { useLoginMutation } from '@redux/slices/auth/authApiSlice'
import { setCredentials, setUser } from '@redux/slices/auth/authSlice'
import {
  useLazyGetUserQuery,
  useLazyLogoutQuery
} from '@redux/slices/auth/userApiSlice'
import { useAppDispatch } from '@redux/store'
import { IError } from '@type/common'
import { etsShowNotify } from '@utils/extension'
import { removeLocalToken } from '@utils/auth'

export const useAuth = function () {
  const dispatch = useAppDispatch()
  const [loginApi] = useLoginMutation()
  const [triggerGetUser] = useLazyGetUserQuery()
  const [triggerLogout] = useLazyLogoutQuery()
  const token: string | undefined = localStorage.getItem(
    'access_token'
  ) as string

  function localRemoveAuthInfo() {
    removeLocalToken()
    dispatch(
      setCredentials({
        token: null,
        user: null
      })
    )
  }

  // TODO : Function getUser
  async function getUser() {
    try {
      const userFetching = await triggerGetUser().unwrap()
      dispatch(setUser(userFetching))
      return userFetching
    } catch (error: any) {
      localRemoveAuthInfo()
      // TODO : show toast message
    }
  }

  async function login() {
    try {
      // *** Try to login in local web React *** :
      // ***Comment code authen by chrome below
      // ***Login in by extension and copy token and replace in body call API
      // ***Get token authen google by chrome
      // *****************************************
      // const authToken = await new Promise<string>((resolve, reject) => {
      //   chrome.identity.getAuthToken({ interactive: true }, (token) => {
      //     if (token !== undefined) {
      //       resolve(token)
      //     } else {
      //       reject(new Error('Unable to obtain auth token.'))
      //     }
      //   })
      // })

      // // ***** replace authToken by token authen by extension to test local
      // const loginResp = await loginApi({
      //   token: authToken
      // })

      // console.log(authToken)

      // ***Example : fake token
      // *****************************************
      const loginResp = await loginApi({
        token:
          'ya29.a0AbVbY6ONir0U8hUmh2GnAy1zvQ6SSFHWDOF8FmFKOFt5UIfgIfWuCof2j9GCpNSf_I3NcaFNxtSc0iSyH8reG10V25kFtc0LTX84Q-3iuAZzCs6TDyo923G7NlhDBakCikucLH7NvrYUtb6VaGgvfaG01ESCCgaCgYKAZYSARESFQFWKvPljHX1476Pzq_B4IjabTfzzw0165'
      })

      if ('data' in loginResp && loginResp.data) {
        const { accessToken, refreshToken } = loginResp.data.data
        localStorage.setItem('access_token', accessToken)
        localStorage.setItem('refresh_token', refreshToken)
        dispatch(
          setCredentials({
            token: accessToken,
            user: null
          })
        )
        etsShowNotify({
          title: 'login sucess',
          message: 'da vao he thong'
        })
        getUser()
      } else if ('error' in loginResp && loginResp.error) {
        logout()
        console.log((loginResp.error as { data: IError }).data.message)
        // TODO : show message login fail
      } else {
        // TODO : show message login fail
      }
    } catch (error) {
      // TODO : show message login fail
      console.error(error)
    }
  }

  async function logout() {
    // TODO: call API to remove refresh token
    await triggerLogout().unwrap()
    localRemoveAuthInfo()
  }

  return { token, login, logout, getUser }
}
