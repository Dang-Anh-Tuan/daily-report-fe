import GroupTask from '@components/GroupTask'
import { GROUP_TASK_NAME_HEADER, GROUP_TASK_TYPE } from '@constants/dataForm'
import BxIconPointing from '@icons/BxIconPointing'
import {
  useGetNearestReportQuery,
  useUpdateReportMutation
} from '@redux/slices/daily-task/dailyTaskApiSlice'
import {
  selectDailyTaskDataForm,
  setDailyReport,
  setHeadingStore
} from '@redux/slices/daily-task/dailyTaskSlice'
import { useAppDispatch, useAppSelector } from '@redux/store'
import { DailyFormData, GroupTasks } from '@type/form-daily'
import { FC, useEffect, useState } from 'react'
import { setLoading } from '@redux/slices/system/systemSlice'
import InputText from './InputText'
import { selectUser } from '@redux/slices/auth/authSlice'
import { notEmpty } from '@utils/validation'

const DailyForm: FC = () => {
  const currentUser = useAppSelector(selectUser)
  const dataForm = useAppSelector(selectDailyTaskDataForm)
  const dispatch = useAppDispatch()
  const [heading, setHeading] = useState<string>('')
  const [updateReportApi] = useUpdateReportMutation()
  const rulesValidate = [notEmpty]

  const { data: currentReport, isLoading } = currentUser?.id
    ? useGetNearestReportQuery(currentUser.id)
    : { data: null, isLoading: false }

  useEffect(() => {
    dispatch(setLoading(isLoading))
    dispatch(setDailyReport(currentReport as DailyFormData))
  }, [currentReport, isLoading])

  useEffect(() => {
    setHeading(dataForm?.heading || '')
  }, [dataForm])

  function handleBlurHeading(e: React.FormEvent<HTMLInputElement>) {
    const newValue = e.currentTarget.value
    if (newValue) {
      dispatch(setHeadingStore(newValue as string))
      if (dataForm.id) {
        updateReportApi({
          id: dataForm.id,
          data: {
            data: {
              heading: newValue
            }
          }
        })
      }
    }
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
