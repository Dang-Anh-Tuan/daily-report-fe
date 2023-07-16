import { TaskType } from '@constants/dataForm'
import { selectUser } from '@redux/slices/auth/authSlice'
import {
  useGetNearestReportQuery,
  useUpdateReportMutation
} from '@redux/slices/daily-task/dailyTaskApiSlice'
import { addTask } from '@redux/slices/daily-task/dailyTaskSlice'
import { useAppDispatch, useAppSelector } from '@redux/store'
import { TaskDailyForm } from '@type/form-daily'
import { User } from '@type/user'

export const useGroupTask = function () {
  const currentUser: User | null | undefined = useAppSelector(selectUser)
  const dispatch = useAppDispatch()

  const getReportApi = currentUser?.id
    ? useGetNearestReportQuery(currentUser.id)
    : { data: null, isLoading: false, refetch: null }

  const [updateReportApi] = useUpdateReportMutation()

  function handleAddTask(type: TaskType) {
    const newTask: TaskDailyForm = {
      id: null,
      content: '',
      type: type,
      link: null,
      percent: 0
    }
    dispatch(
      addTask({
        type,
        task: newTask
      })
    )
  }

  async function handleUpdateHeadingTask(newValue: string) {
    if (newValue && getReportApi.data && getReportApi.data.id) {
      await updateReportApi({
        id: getReportApi.data.id,
        data: {
          data: {
            heading: newValue
          }
        }
      })
        .unwrap()
        .then(() => {
          if (getReportApi.refetch) {
            getReportApi.refetch()
          }
        })
    }
  }

  return {
    getReportApi,
    handleAddTask,
    handleUpdateHeadingTask
  }
}
