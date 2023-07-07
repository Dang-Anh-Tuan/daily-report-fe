import { FC } from 'react'

const Loading: FC = () => {
  return (
    <div className='fixed w-[400px] h-[500px] flex justify-center items-center bg-[rgba(0,0,0,0.5)]'>
      <div
        className='w-12 h-12 rounded-full animate-spin
      border border-solid border-#FEBF63 border-t-transparent'
      ></div>
    </div>
  )
}

export default Loading
