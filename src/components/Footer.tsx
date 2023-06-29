import { FC } from 'react'
import Button from '@components/Button'
import BxIconCopy from '@icons/BxIconCopy'

const Footer: FC = () => {
  return (
    <div className='h-[18%] border-t flex justify-end items-center shadow-16'>
      <Button
        classCustom='flex justify-center items-center text-#474B50 border-#FF9F1C bg-#FF9F1C rounded-full mr-2'
        size='medium'
      >
        <span className=' font-normal leading-3 text-white'>Copy report</span>
        <div className='ml-1'>
          <BxIconCopy height={16} width={16} color='#FFFFFF' />
        </div>
      </Button>
    </div>
  )
}

export default Footer
