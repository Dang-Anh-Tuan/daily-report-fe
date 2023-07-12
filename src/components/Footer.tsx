import { FC } from 'react'
import Button from '@components/Button'
import BxIconCopy from '@icons/BxIconCopy'
import { useAppSelector } from '@redux/store'
import { selectDailyTaskDataForm } from '@redux/slices/daily-task/dailyTaskSlice'
import { convertReportToText, setTextToClipboard } from '@utils/share-function'

const Footer: FC = () => {
  const currentReport = useAppSelector(selectDailyTaskDataForm)

  async function handleCopyTextReport() {
    await setTextToClipboard(convertReportToText(currentReport))
  }

  return (
    <div className='h-[18%] border-t flex justify-end items-center shadow-16'>
      <Button
        classCustom='flex justify-center items-center text-#474B50 border-#FF9F1C bg-#FF9F1C rounded-full mr-2'
        size='medium'
        onClick={handleCopyTextReport}
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
