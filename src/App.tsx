import Middleware from '@middleware/index'
import HomePage from '@pages/home'
import './App.css'
import { useAppSelector } from '@redux/store'
import { selectToken } from '@redux/slices/auth/authSlice'

function App() {
  const token = useAppSelector(selectToken)

  return (
    <div className='app border-none'>
      <Middleware
        listMiddleware={[
          {
            name: 'AuthenMiddleware',
            props: { needAuth: true, token: token }
          },
          {
            name: 'UserMiddleware',
            props: { token: token }
          }
        ]}
      >
        <HomePage />
      </Middleware>
    </div>
  )
}

export default App
