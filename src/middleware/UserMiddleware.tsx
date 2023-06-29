import { FC, ReactNode, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@redux/store'
import { useAuth } from '@hooks/useAuth'
import { selectUser, setUser } from '@redux/slices/auth/authSlice'
import LoginPage from '@pages/login'

interface UserMiddlewareProps {
  children: ReactNode
  token: string | null | undefined
}

const UserMiddleware: FC<UserMiddlewareProps> = ({ children, token }) => {
  const { getUser } = useAuth()
  const currentUser = useAppSelector(selectUser)
  const dispatch = useAppDispatch()

  useEffect(() => {
    async function checkUser() {
      if (!token) {
        return <LoginPage />
      } else if (!currentUser) {
        // TODO : call API get User ( use await )
        const user = getUser(token)
        if (!user) return <LoginPage />
        dispatch(setUser(user))
      }
    }
    checkUser()
  }, [])

  return <>{children}</>
}

export default UserMiddleware
