import { useAppDispatch, useAppSelector } from '@redux/store'
import {
  editTask,
  selectDailyTaskDataForm
} from '@redux/slices/daily-task/dailyTaskSlice'
import { TaskCreate, TaskDailyForm, TaskUpdate } from '~/type/form-daily'
import {
  useCreateTaskMutation,
  useUpdateTaskMutation
} from '@redux/slices/daily-task/taskApiSlice'
import { useGetNearestReportQuery } from '@redux/slices/daily-task/dailyTaskApiSlice'
import { selectUser } from '@redux/slices/auth/authSlice'

export const useTask = function (task: TaskDailyForm, index: number) {
  const currentUser = useAppSelector(selectUser)
  const dispatch = useAppDispatch()
  const [updateTaskApi] = useUpdateTaskMutation()
  const [createTaskApi] = useCreateTaskMutation()
  const getNearestReportApi = currentUser?.id
    ? useGetNearestReportQuery(currentUser.id)
    : { data: null, isLoading: false, refetch: null }

  const currentReport = useAppSelector(selectDailyTaskDataForm)

  async function handleBlurInputTask(e: React.FormEvent<HTMLInputElement>) {
    const newValue = e.currentTarget.value
    if (newValue) {
      const newTask = {
        ...task,
        content: newValue,
        idReport: currentReport.id
      }
      // dispatch(editTask({ type: task.type, index: index, task: newTask }))
      if (newTask.id && newTask.idReport) {
        await updateTask(newTask)
      } else {
        await createTask({
          content: newTask.content,
          percent: newTask.percent,
          type: newTask.type,
          idReport: newTask.idReport
        })
      }
    }
  }

  async function createTask(task: TaskCreate) {
    await createTaskApi(task)
      .unwrap()
      .then(() => {
        if (getNearestReportApi.refetch) {
          getNearestReportApi.refetch()
        }
      })
  }

  async function updateTask(task: TaskUpdate) {
    await updateTaskApi(task)
      .unwrap()
      .then(() => {
        if (getNearestReportApi.refetch) {
          getNearestReportApi.refetch()
        }
      })
  }

  return { handleBlurInputTask }
}
