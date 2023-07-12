import InputText from '@components/InputText'
import { TASK_TYPE } from '@constants/dataForm'
import { useTask } from '@hooks/useTask'
import BxIconTimes from '@icons/BxIconTimes'
import { TaskDailyForm } from '@type/form-daily'
import { trimZeroStartAtNumber } from '@utils/share-function'
import { notEmpty } from '@utils/validation'
import { FC, useState } from 'react'

interface TaskItemProps {
  task: TaskDailyForm
  index: number
}

const TaskItem: FC<TaskItemProps> = ({ task, index }) => {
  const [taskData, setTaskData] = useState<TaskDailyForm>(task)
  const rulesValidate = [notEmpty]
  const { handleBlurTaskInput, handleDeleteTask } = useTask(task)

  function handleInputTask(value: string, name: string) {
    const isNumber = name === 'percent'

    if (name === 'percent' && +value > 100) {
      setTaskData((pre) => ({ ...pre, percent: 100 }))
    } else {
      setTaskData((pre) => ({
        ...pre,
        [name]: isNumber ? trimZeroStartAtNumber(value) : value
      }))
    }
  }

  return (
    <div className='flex items-start w-full gap-2 '>
      <div className={task.type === TASK_TYPE.ACTUAL ? 'w-9/12' : 'w-11/12'}>
        <InputText
          rules={rulesValidate}
          value={taskData.content}
          placeholder='Enter header of daily report...'
          name='content'
          onInput={handleInputTask}
          onBlur={async (e) => {
            await handleBlurTaskInput(e.currentTarget.value, 'content')
          }}
        />
      </div>
      {task.type === TASK_TYPE.ACTUAL && (
        <div className='w-2/12 flex'>
          <InputText
            value={taskData.percent === undefined ? '' : taskData.percent}
            placeholder=''
            name='percent'
            type='number'
            styleCustom={{ textAlign: 'center' }}
            max={100}
            onInput={handleInputTask}
            onBlur={async (e) => {
              await handleBlurTaskInput(+e.currentTarget.value, 'percent')
            }}
          />
          <span className='relative text-14 top-1'>%</span>
        </div>
      )}

      <div className='flex justify-center items-center h-full w-1/12'>
        <div className='relative top-1'>
          <button onClick={() => handleDeleteTask(task, index)}>
            <BxIconTimes />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskItem
