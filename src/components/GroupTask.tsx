import Button from '@components/Button'
import TaskItem from '@components/TaskItem'
import { TaskType } from '@constants/dataForm'
import { useGroupTask } from '@hooks/useGroupTask'
import BxIconAdd from '@icons/BxIconAdd'
import BxIconPointing from '@icons/BxIconPointing'
import { TaskDailyForm } from '@type/form-daily'
import { FC } from 'react'

interface GroupTaskProps {
  title: string
  tasks: TaskDailyForm[]
  type: TaskType
}

const GroupTask: FC<GroupTaskProps> = ({ tasks, title, type }) => {
  const { handleAddTask } = useGroupTask()

  return (
    <>
      <div className='flex items-center'>
        <div className='relative top-[6px]'>
          <BxIconPointing />
        </div>
        <p className='text-14 font-bold leading-5 mt-4 ml-2'>{title || ''}</p>
      </div>
      {tasks &&
        tasks.map((task, index) => (
          <TaskItem key={`${task.id} - ${index}`} task={task} index={index} />
        ))}
      <div className='flex mt-4'>
        <Button
          classCustom='flex justify-center items-center text-white bg-#00C851 p-4 hover:bg-#00C851.8'
          onClick={() => {
            handleAddTask(type)
          }}
        >
          <BxIconAdd height={16} width={16} color='white' />
          <span className='ml-1 text-white font-normal'>New Task</span>
        </Button>
      </div>
    </>
  )
}

export default GroupTask
