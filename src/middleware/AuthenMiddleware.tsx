import LoginPage from '@pages/login'
import { FC, ReactNode } from 'react'
interface AuthenMiddlewareProps {
  children: ReactNode
  needAuth?: boolean
  token: string | null | undefined
}

const AuthenMiddleware: FC<AuthenMiddlewareProps> = ({
  children,
  needAuth,
  token
}) => {
  const isLoggedIn = !!token || localStorage.getItem('access_token')

  if (isLoggedIn) {
    if (!needAuth) {
      return <LoginPage />
    }
  } else if (needAuth) {
    return <LoginPage />
  }

  return children
}

export default AuthenMiddleware
