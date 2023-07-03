import { setCredentials, setUser } from '@redux/slices/auth/authSlice'
import { useAppDispatch } from '@redux/store'

const fakeUser = {
  name: 'Dang Anh Tuan',
  email: 'tuanda2@vmogroup.com',
  avatar: 'abc',
  role: 'user'
}

export const useAuth = function () {
  const dispatch = useAppDispatch()
  const token: string | undefined = localStorage.getItem(
    'access_token'
  ) as string

  function cookieRemoveAuthInfo() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    dispatch(
      setCredentials({
        token: null,
        user: null
      })
    )
  }

  // TODO : Function getUser
  function getUser(token: string) {
    try {
      console.log('call use with token : ' + token)

      dispatch(setUser(fakeUser))
      return fakeUser
    } catch (error: any) {
      cookieRemoveAuthInfo()
      // TODO : show toast message
    }
  }

  async function login() {
    try {
      const authToken = await new Promise((resolve) => {
        chrome.identity.getAuthToken({ interactive: true }, resolve)
      })

      console.log(authToken)
      //  TODO : call API login
      // TODO : call API get user
    } catch (error) {
      console.error(error)
    }
  }

  function logout() {
    cookieRemoveAuthInfo()
    // TODO : Show message logout
  }

  return { token, login, logout, getUser }
}
