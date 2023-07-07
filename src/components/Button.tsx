import { FC, ReactNode, useMemo } from 'react'

interface ButtonProps {
  classCustom?: string
  size?: string
  children: ReactNode
  color?: string
  type?: 'outline' | 'text' | 'flat'
  onClick?: any
}

const Button: FC<ButtonProps> = ({
  classCustom = '',
  size = 'small',
  color = '#FEBF63',
  type = 'text',
  onClick,
  children
}) => {
  const classSize = useMemo(() => {
    switch (size) {
      case 'small':
        return 'px-2 text-12 h-6'
      case 'medium':
        return 'px-4 py-2 text-14 h-8'
      case 'large':
        return 'px-6 py-3 text-16 h-10'
      default:
        break
    }
  }, [size])

  const classType = useMemo(() => {
    switch (type) {
      case 'outline':
        return `border border-2 border-${color} hover:bg-${color}/[.05]`
      case 'text':
        return `border border-2 hover:border-${color}/[.05] hover:bg-${color}/[.05]`
      case 'flat':
        return `border border-2 bg-${color} hover:bg-${color}/[.05] text-white`
      default:
        break
    }
  }, [type])

  const classFinal = useMemo(() => {
    return `rounded-4 leading-24 ${classSize} ${classType} ${classCustom}`
  }, [])
  return (
    <>
      <button
        className={classFinal}
        onClick={() => {
          if (onClick) {
            onClick()
          }
        }}
      >
        {children}
      </button>
    </>
  )
}

export default Button
