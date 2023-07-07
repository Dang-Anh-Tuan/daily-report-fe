import { FC } from 'react'
import { RuleValidate, useValidate } from '@utils/validation'

interface InputTextProps {
  value: string | number
  placeholder?: string
  name?: string
  type?: string
  rules?: RuleValidate[]
  onInput?: (value: string, name: string) => any
  onFocus?: (e: React.FormEvent<HTMLInputElement>) => any
  onBlur?: (e: React.FormEvent<HTMLInputElement>) => any
}

const InputText: FC<InputTextProps> = ({
  value,
  placeholder,
  name,
  type = 'text',
  rules = [],
  onInput,
  onFocus,
  onBlur
}) => {
  const { valid, error } = useValidate(value, rules)
  return (
    <>
      <div className='relative'>
        <input
          type={type}
          className={`text-14 font-normal px-3 leading-3 py-1 border-b-2 border-#A0A4AA w-full peer overflow-y-hidden ${
            !valid && 'border-#FC1817'
          }`}
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
        <div
          className={`absolute top-[calc(100%-2px)] w-0 h-[2px] bg-#FEBF63  transition-all duration-700 ${
            valid && 'peer-focus:w-full'
          }`}
        ></div>
      </div>
      <p className='ml-3 text-12 font-normal italic text-#FC1817 leading-16 mt-1'>
        {error && error[0]}
      </p>
    </>
  )
}

export default InputText
