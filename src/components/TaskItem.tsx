import { FC, useState } from 'react'
import InputText from '@components/InputText'
import BxIconTimes from '@icons/BxIconTimes'
import { TaskDailyForm } from '@type/form-daily'

interface TaskItemProps {
  task: TaskDailyForm
  index?: number
  handleSetTask?: any
  keyGroup: string
}

const TaskItem: FC<TaskItemProps> = ({ task, keyGroup }) => {
  const [taskData, setTaskData] = useState<TaskDailyForm>(task)

  function handleInputTask(value: string, name: string) {
    setTaskData((pre) => ({ ...pre, [name]: value }))
  }

  return (
    <div className='flex items-center w-full gap-2'>
      <div className={keyGroup === 'actual' ? 'w-9/12' : 'w-11/12'}>
        <InputText
          value={taskData.content}
          placeholder='Enter header of daily report...'
          name='content'
          onInput={handleInputTask}
        />
      </div>
      {keyGroup === 'actual' && (
        <div className='w-2/12 flex'>
          <InputText
            value={taskData.percent || ''}
            placeholder=''
            name='percent'
            type='number'
            onInput={handleInputTask}
          />
          <span className='relative text-14 top-1'>%</span>
        </div>
      )}

      <div className='flex justify-center items-center h-full w-1/12'>
        <div className='relative top-1'>
          <button>
            <BxIconTimes />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskItem
