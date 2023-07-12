import GroupTask from '@components/GroupTask'
import { GROUP_TASK_NAME_HEADER, GROUP_TASK_TYPE } from '@constants/dataForm'
import { useGroupTask } from '@hooks/useGroupTask'
import BxIconPointing from '@icons/BxIconPointing'
import {
  selectDailyTaskDataForm,
  setDailyReport
} from '@redux/slices/daily-task/dailyTaskSlice'
import { useAppDispatch, useAppSelector } from '@redux/store'
import { DailyFormData, GroupTasks } from '@type/form-daily'
import { notEmpty } from '@utils/validation'
import { FC, useEffect, useState } from 'react'
import InputText from './InputText'

const DailyForm: FC = () => {
  const { getReportApi, handleUpdateHeadingTask } = useGroupTask()
  const { data: currentReport } = getReportApi
  const dataForm = useAppSelector(selectDailyTaskDataForm)
  const dispatch = useAppDispatch()
  const [heading, setHeading] = useState<string>('')
  const rulesValidate = [notEmpty]

  useEffect(() => {
    dispatch(setDailyReport(currentReport as DailyFormData))
  }, [currentReport])

  useEffect(() => {
    setHeading(dataForm?.heading || '')
  }, [dataForm])

  async function handleBlurHeading(e: React.FormEvent<HTMLInputElement>) {
    const newValue = e.currentTarget.value
    await handleUpdateHeadingTask(newValue)
  }

  return (
    <div className='p-3 overflow-y-auto scroll-smooth min-h-[80%]'>
      {/* Header */}
      <div className='flex items-center'>
        <div className='relative top-[-2px]'>
          <BxIconPointing />
        </div>
        <p className='text-14 font-bold leading-5 ml-2'>Header:</p>
      </div>
      <InputText
        value={heading}
        rules={rulesValidate}
        placeholder='Enter header of daily report...'
        onInput={(value) => setHeading(value)}
        onBlur={handleBlurHeading}
      />
      {dataForm &&
        Object.keys(dataForm.groupTask).map((group) => {
          return (
            <GroupTask
              key={group}
              title={GROUP_TASK_NAME_HEADER[group]}
              tasks={dataForm.groupTask[group as keyof GroupTasks]}
              type={GROUP_TASK_TYPE[group]}
            />
          )
        })}
    </div>
  )
}

export default DailyForm
