import Middleware from '@middleware/index'
import HomePage from '@pages/home'
import { selectToken, setToken } from '@redux/slices/auth/authSlice'
import { useAppDispatch, useAppSelector } from '@redux/store'
import { Suspense } from 'react'
import './App.css'

function App() {
  const token = useAppSelector(selectToken)
  const dispatch = useAppDispatch()

  if (!token) {
    const tokenInLS = localStorage.getItem('access_token')
    if (tokenInLS) {
      dispatch(setToken(tokenInLS))
    }
  }

  return (
    <div className='app border-none'>
      <Suspense fallback={<div>Loading...</div>}>
        <Middleware
          listMiddleware={[
            {
              name: 'AuthenMiddleware',
              props: { needAuth: true, token: token }
            },
            {
              name: 'UserMiddleware',
              props: { needAuth: true, token: token }
            }
          ]}
        >
          <HomePage />
        </Middleware>
      </Suspense>
    </div>
  )
}

export default App
