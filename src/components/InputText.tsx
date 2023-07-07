import { FC } from 'react'

interface InputTextProps {
  value: string | number
  placeholder?: string
  name?: string
  type?: string
  onInput?: (value: string, name: string) => any
  onFocus?: (e: React.FormEvent<HTMLInputElement>) => any
  onBlur?: (e: React.FormEvent<HTMLInputElement>) => any
}

const InputText: FC<InputTextProps> = ({
  value,
  placeholder,
  name,
  type = 'text',
  onInput,
  onFocus,
  onBlur
}) => {
  return (
    <div className='relative'>
      <input
        type={type}
        className='text-14 font-normal px-3 leading-3 py-1 border-b-2 border-#A0A4AA w-full peer overflow-y-hidden'
        value={value}
        placeholder={placeholder}
        name={name}
        onInput={(e: React.FormEvent<HTMLInputElement>) => {
          if (onInput) {
            onInput(e.currentTarget.value, e.currentTarget.name)
          }
        }}
        onFocus={(e: React.FormEvent<HTMLInputElement>) => {
          if (onFocus) {
            onFocus(e)
          }
        }}
        onBlur={(e: React.FormEvent<HTMLInputElement>) => {
          if (onBlur) {
            onBlur(e)
          }
        }}
      />
      <div className='absolute top-[calc(100%-2px)] w-0 h-[2px] bg-#FEBF63 peer-focus:w-full transition-all duration-700'></div>
    </div>
  )
}

export default InputText
