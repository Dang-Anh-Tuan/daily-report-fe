import BxIconLogout from '@icons/BxIconLogout'
import BxIconSetting from '@icons/BxIconSetting'
import { FC } from 'react'

const Header: FC = () => {
  return (
    <div className='border-b border-#EEEEEE h-[15%] w-full'>
      <div className='flex justify-between items-center px-3 h-full'>
        <div>
          {/* <button className='flex justify-center items-center px-4 h-[32px] rounded-4 bg-#FEBF63.5 first-line:shadow-8 pt-[1px]'>
            <div className='relative top-1 '>
              <BxIconJira />
            </div>
            <span className='text-14  tracking-wide font-medium text-#2B2D30'>
              Collect link
            </span>
          </button> */}
        </div>
        <div className='flex items-center'>
          <button className='flex justify-center items-center w-8 h-8 rounded-full hover:bg-#FEBF63.5'>
            <BxIconSetting />
          </button>
          <button className='flex justify-center items-center w-8 h-8 rounded-full ml-2 hover:bg-#FEBF63.5'>
            <BxIconLogout />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
