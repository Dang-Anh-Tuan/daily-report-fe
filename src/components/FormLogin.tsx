import { FC } from 'react'
import BxIconGoogle from '@icons/BxIconGoogle'
import logoVMO from '@assets/images/logo-vmo.png'
import { useAuth } from '@hooks/useAuth'

interface FormLoginProps {}

const FormLogin: FC<FormLoginProps> = ({}) => {
  const { login } = useAuth()

  return (
    <div className='flex flex-col items-center'>
      {/* Logo */}
      <img src={logoVMO} alt='Logo VMO' className='w-[120px]' />

      {/* Button Login Google  */}
      <button
        className='flex items-end justify-center px-10 py-3 border border-#A0A4AA rounded-8 mt-8'
        onClick={() => login()}
      >
        <BxIconGoogle width={24} height={24} />
        <span className='ml-2 text-16'>Login with Google</span>
      </button>
    </div>
  )
}

export default FormLogin
