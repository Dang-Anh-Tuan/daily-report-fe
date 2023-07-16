import InputText from '@components/InputText'
import { TASK_TYPE } from '@constants/dataForm'
import { useTask } from '@hooks/useTask'
import { TaskDailyForm } from '@type/form-daily'
import { trimZeroStartAtNumber } from '@utils/share-function'
import { notEmpty } from '@utils/validation'
import { FC, useState } from 'react'
import BxIconTrash from '@icons/BxTrash'
import Button from './Button'
import BxIconJira from '@icons/BxIconJira'
import BxIconTimes from '@icons/BxIconTimes'

interface TaskItemProps {
  task: TaskDailyForm
  index: number
}

const TaskItem: FC<TaskItemProps> = ({ task, index }) => {
  const [taskData, setTaskData] = useState<TaskDailyForm>(task)
  const rulesValidate = [notEmpty]
  const {
    handleBlurTaskInput,
    handleDeleteTask,
    handleAddTaskJira,
    handleDeleteLinkJira
  } = useTask(task)

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
    <div>
      <div className='flex items-start w-full gap-2 '>
        <div className={task.type === TASK_TYPE.ACTUAL ? 'w-9/12' : 'w-11/12'}>
          <div className='flex  w-full items-center'>
            <div className='w-6 relative top-1'>
              <p className='text-16 font-normal leading-3 mb-auto'>{`${
                index + 1
              }.`}</p>
            </div>
            <div className='flex-1'>
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
          </div>
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
            <button
              onClick={() => handleDeleteTask(task, index)}
              className='p-2 rounded-full hover:bg-#FF4444.2'
            >
              <BxIconTrash width={20} height={20} color='#ff4444' />
            </button>
          </div>
        </div>
      </div>
      {task.link ? (
        <div className='flex items-end'>
          <a
            className=' ml-6 text-14 font-normal text-#2684FF italic'
            href={task.link}
            target='_blank'
            rel='noopener'
          >
            {task.link}
          </a>
          <div>
            <button
              className='rounded-full hover:bg-#FF4444.2 ml-4'
              onClick={() => handleDeleteLinkJira(task.type, task, index)}
            >
              <BxIconTimes width={24} height={24} color='#ff4444' />
            </button>
          </div>
        </div>
      ) : (
        <Button
          classCustom='ml-5 mt-2 flex justify-center items-center text-#474B50 border-#7FDBDA bg-#7FDBDA.5 w-[30px] group hover:w-auto transition-all  duration-500'
          onClick={() => {
            handleAddTaskJira(task.type, task, index)
          }}
        >
          <div className='relative top-1 left-1'>
            <BxIconJira height={24} width={24} />
          </div>
          <div className='whitespace-nowrap overflow-hidden w-0 group-hover:w-fit transition-all duration-500'>
            <p className='text-#474B50 font-normal '>Get link Jira</p>
          </div>
        </Button>
      )}
    </div>
  )
}

export default TaskItem
