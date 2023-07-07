import BxIconLogout from '@icons/BxIconLogout'
import BxIconSetting from '@icons/BxIconSetting'
import { FC } from 'react'
import { selectUser } from '@redux/slices/auth/authSlice'
import { useAppSelector } from '@redux/store'
import { useAuth } from '@hooks/useAuth'

const Header: FC = () => {
  const currentUser = useAppSelector(selectUser)
  const { logout } = useAuth()
  return (
    <div className='border-b border-#EEEEEE h-[15%] w-full'>
      <div className='flex justify-between items-center px-3 h-full'>
        <div className='w-8/12 truncate'>
          <span className='text-14 font-normal'>Hello, </span>
          <span className='text-14 text-#FF9F1C'>{currentUser?.email}</span>
        </div>
        <div className='flex items-center'>
          <button className='flex justify-center items-center w-8 h-8 rounded-full hover:bg-#FEBF63.5'>
            <BxIconSetting />
          </button>
          <button
            className='flex justify-center items-center w-8 h-8 rounded-full ml-2 hover:bg-#FEBF63.5'
            onClick={() => logout()}
          >
            <BxIconLogout />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
