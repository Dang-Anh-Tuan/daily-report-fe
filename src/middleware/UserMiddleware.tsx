import { FC, ReactNode, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@redux/store'
import { useAuth } from '@hooks/useAuth'
import { selectUser, setUser } from '@redux/slices/auth/authSlice'
import LoginPage from '@pages/login'

interface UserMiddlewareProps {
  children: ReactNode
  token: string | null | undefined
}

const UserMiddleware: FC<UserMiddlewareProps> = ({ children, token }) => {
  const { getUser, logout } = useAuth()
  const currentUser = useAppSelector(selectUser)
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const checkUser = async () => {
      if (!token) {
        setIsLoading(false)
        return
      } else if (!currentUser) {
        try {
          const user = await getUser()
          if (!user) {
            setIsLoading(false)
            return
          }
          dispatch(setUser(user))
        } catch (error) {
          logout()
        } finally {
          setIsLoading(false)
        }
      }
    }

    checkUser()
  }, [token])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!token || !currentUser) {
    return <LoginPage />
  }

  return children
}

export default UserMiddleware
