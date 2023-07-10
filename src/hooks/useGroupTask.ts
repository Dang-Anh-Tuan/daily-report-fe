import { TaskType } from '@constants/dataForm'
import { addTask } from '@redux/slices/daily-task/dailyTaskSlice'
import { useAppDispatch } from '@redux/store'
import { TaskDailyForm } from '~/type/form-daily'

export const useGroupTask = function () {
  const dispatch = useAppDispatch()

  function handleAddTask(type: TaskType) {
    const newTask: TaskDailyForm = {
      id: null,
      content: '',
      type: type,
      percent: 0
    }
    dispatch(
      addTask({
        type,
        task: newTask
      })
    )
  }
  return { handleAddTask }
}
