import Button from '@components/Button'
import TaskItem from '@components/TaskItem'
import BxIconAdd from '@icons/BxIconAdd'
import { TaskDailyForm } from '@type/form-daily'
import { FC } from 'react'
import BxIconJira from '@icons/BxIconJira'
import BxIconPointing from '@icons/BxIconPointing'

interface GroupTaskProps {
  title: string
  tasks: TaskDailyForm[]
  keyGroup: string
}

const GroupTask: FC<GroupTaskProps> = ({ tasks, keyGroup, title }) => {
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
          <TaskItem
            key={task.id}
            task={task}
            index={index}
            keyGroup={keyGroup}
          />
        ))}
      <div className='flex mt-4'>
        <Button classCustom='flex justify-center items-center text-#474B50 border-#ADE498 bg-#ADE498.5'>
          <BxIconAdd height={16} width={16} color='#474B50' />
          <span className='ml-1 text-#474B50 font-normal'>New Task</span>
        </Button>
        <Button classCustom='ml-2 flex justify-center items-center text-#474B50 border-#7FDBDA bg-#7FDBDA.5'>
          <div className='relative top-1'>
            <BxIconJira height={24} width={24} />
          </div>
          <span className='text-#474B50 font-normal'>Collect link</span>
        </Button>
      </div>
    </>
  )
}

export default GroupTask
