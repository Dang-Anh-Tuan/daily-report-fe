import { FC, useState } from 'react'
import InputText from '@components/InputText'
import BxIconTimes from '@icons/BxIconTimes'
import { TaskDailyForm } from '@type/form-daily'
import { notEmpty } from '@utils/validation'
import { TASK_TYPE } from '@constants/dataForm'
import { useAppDispatch } from '@redux/store'
import { editTask } from '@redux/slices/daily-task/dailyTaskSlice'

interface TaskItemProps {
  task: TaskDailyForm
  index: number
}

const TaskItem: FC<TaskItemProps> = ({ task, index }) => {
  const [taskData, setTaskData] = useState<TaskDailyForm>(task)
  const rulesValidate = [notEmpty]
  const dispatch = useAppDispatch()

  function handleInputTask(value: string, name: string) {
    setTaskData((pre) => ({ ...pre, [name]: value }))
  }

  function handleBlurInputTask(e: React.FormEvent<HTMLInputElement>) {
    
    const newValue = e.currentTarget.value
    console.log(newValue);
    const newTask = {
      ...task,
      content: newValue
    }
    console.log(newTask)
    dispatch(editTask({ type: task.type, index: index, task: newTask }))
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
          onBlur={handleBlurInputTask}
        />
      </div>
      {task.type === TASK_TYPE.ACTUAL && (
        <div className='w-2/12 flex'>
          <InputText
            value={taskData.percent || ''}
            placeholder=''
            name='percent'
            type='number'
            styleCustom={{ padding: '4px 2px' }}
            max={100}
            onInput={handleInputTask}
            onBlur={handleBlurInputTask}
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
