import GroupTask from '@components/GroupTask'
import { GROUP_TASK_NAME_HEADER } from '@constants/dataForm'
import BxIconPointing from '@icons/BxIconPointing'
import { selectDailyTaskDataForm } from '@redux/slices/daily-task/dailyTaskSlice'
import { useAppSelector } from '@redux/store'
import { GroupTasks } from '@type/form-daily'
import { FC, useState } from 'react'
import InputText from './InputText'

const DailyForm: FC = () => {
  const [headerContent, setheaderContent] = useState<string>('')
  const dataForm = useAppSelector(selectDailyTaskDataForm)

  return (
    <div className='p-3 overflow-y-auto scroll-smooth'>
      {/* Header */}
      <div className='flex items-center'>
        <div className='relative top-[-2px]'>
          <BxIconPointing />
        </div>
        <p className='text-14 font-bold leading-5 ml-2'>Header:</p>
      </div>
      <InputText
        value={headerContent}
        placeholder='Enter header of daily report...'
        onInput={setheaderContent}
      />
      {dataForm &&
        Object.keys(dataForm.groupTask).map((group) => {
          return (
            <GroupTask
              key={group}
              title={GROUP_TASK_NAME_HEADER[group]}
              tasks={dataForm.groupTask[group as keyof GroupTasks]}
              keyGroup={group}
            />
          )
        })}
    </div>
  )
}

export default DailyForm
