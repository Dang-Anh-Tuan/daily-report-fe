import { FC } from 'react'

interface BxIconTimesProps {
  width?: number
  height?: number
  color?: string
}

const BxIconTimes: FC<BxIconTimesProps> = ({ width, height, color }) => {
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16 8L8 16M8 8L16 16'
        stroke={color || '#000'}
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  )
}

export default BxIconTimes
