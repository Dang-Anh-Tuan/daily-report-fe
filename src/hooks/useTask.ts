import { selectUser } from '@redux/slices/auth/authSlice'
import { useGetNearestReportQuery } from '@redux/slices/daily-task/dailyTaskApiSlice'
import {
  deleteTask,
  selectDailyTaskDataForm
} from '@redux/slices/daily-task/dailyTaskSlice'
import {
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation
} from '@redux/slices/daily-task/taskApiSlice'
import { useAppDispatch, useAppSelector } from '@redux/store'
import { TaskType } from '@constants/dataForm'
import { TaskCreate, TaskDailyForm, TaskUpdate } from '@type/form-daily'

export const useTask = function (task?: TaskDailyForm) {
  const currentUser = useAppSelector(selectUser)
  const [updateTaskApi] = useUpdateTaskMutation()
  const [createTaskApi] = useCreateTaskMutation()
  const [deleteTaskApi] = useDeleteTaskMutation()
  const getNearestReportApi = currentUser?.id
    ? useGetNearestReportQuery(currentUser.id)
    : { data: null, isLoading: false, refetch: null }

  const currentReport = useAppSelector(selectDailyTaskDataForm)
  const dispatch = useAppDispatch()

  async function handleBlurTaskInput(
    value: string | number,
    field: 'content' | 'percent' = 'content'
  ) {
    if (value && task) {
      const newTask = {
        ...task,
        idReport: currentReport.id
      }

      if (field === 'content' && typeof value === 'string') {
        newTask.content = value
        await handleUpdateTask(newTask)
      } else if (field === 'percent' && typeof value === 'number') {
        newTask.percent = value
        await handleUpdateTask(newTask)
      }
    }
  }

  async function handleUpdateTask(task: TaskUpdate) {
    if (task.id && task.idReport) {
      await updateTask(task)
    } else {
      await createTask({
        content: task.content,
        percent: task.percent,
        type: task.type,
        idReport: task.idReport
      })
    }
  }

  async function refetchGetNearestReport() {
    if (getNearestReportApi.refetch) {
      await getNearestReportApi.refetch()
    }
  }

  async function createTask(task: TaskCreate) {
    await createTaskApi(task)
      .unwrap()
      .then(async () => {
        await refetchGetNearestReport()
      })
  }

  async function updateTask(task: TaskUpdate) {
    await updateTaskApi(task)
      .unwrap()
      .then(async () => {
        await refetchGetNearestReport()
      })
  }

  async function handleDeleteTask(task: TaskDailyForm, index: number) {
    if (!task.id) {
      dispatch(deleteTask({ task, index }))
    } else {
      await deleteTaskApi(task.id)
        .unwrap()
        .then(async () => {
          await refetchGetNearestReport()
        })
    }
  }

  async function handleAddTaskJira(type: TaskType) {
    if (chrome) {
      chrome.tabs.query({ active: true, currentWindow: true }).then(async (tabs) => {
        const currentTab = tabs[0]
        const currentTabUrl = currentTab.url
        if (currentTabUrl && currentReport.id) {
          await createTask({
            content: currentTabUrl,
            percent: 0,
            type: type,
            idReport: currentReport.id
          })
        }
      })
    }
  }
  return { handleBlurTaskInput, handleDeleteTask, handleAddTaskJira }
}
