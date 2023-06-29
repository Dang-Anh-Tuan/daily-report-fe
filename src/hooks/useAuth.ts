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

  function login() {
    // // TODO : call API get token
    // // TODO : call API get user
    // localStorage.setItem('access_token', fakeToken)
    // dispatch(
    //   setCredentials({
    //     token: fakeToken,
    //     user: fakeUser
    //   })
    // )
    chrome.identity.getAuthToken({ 'interactive': true }, function (token) {
      console.log(token);
    });
  }

  function logout() {
    cookieRemoveAuthInfo()
    // TODO : Show message logout
  }

  return { token, login, logout, getUser }
}
