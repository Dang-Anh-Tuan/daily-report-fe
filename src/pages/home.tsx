import DailyForm from '@components/DailyForm'
import Footer from '@components/Footer'
import Header from '@components/Header'
import { FC } from 'react'

const HomePage: FC = () => {
  return (
    <div className='flex flex-col text-3xl font-bold  h-full w-full'>
      <Header />
      <DailyForm />
      <Footer />
    </div>
  )
}

export default HomePage
