import DailyForm from '@components/DailyForm'
import Footer from '@components/Footer'
import Header from '@components/Header'
import { FC } from 'react'
import Loading from '@components/Loading'
import { useAppSelector } from '@redux/store'
import { selectLoading } from '@redux/slices/system/systemSlice'

const HomePage: FC = () => {
  const isLoading = useAppSelector(selectLoading)
  return (
    <div className='flex flex-col text-3xl font-bold  h-full w-full'>
      <Header />
      <DailyForm />
      <Footer />
      {isLoading && <Loading />}
    </div>
  )
}

export default HomePage
