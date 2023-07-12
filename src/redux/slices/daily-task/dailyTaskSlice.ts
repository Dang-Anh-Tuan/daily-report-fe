import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { DailyFormData, TaskDailyForm } from '@type/form-daily'
import { RootState } from '@redux/store'
import { TASK_TYPE, TaskType } from '@constants/dataForm'

interface DailyTaskState {
  dataForm: DailyFormData
}

const initialState: DailyTaskState = {
  dataForm: {
    id: null,
    heading: '',
    createdAt: null,
    updatedAt: null,
    deletedAt: null,
    groupTask: {
      todayPlans: [],
      actual: [],
      nextDayPlans: [],
      issue: []
    }
  }
}

const setDailyReportAction: CaseReducer<
  DailyTaskState,
  PayloadAction<DailyFormData>
> = (state, action) => {
  state.dataForm = action.payload
}

const setHeadingAction: CaseReducer<DailyTaskState, PayloadAction<string>> = (
  state,
  action
) => {
  state.dataForm.heading = action.payload
}

const addTaskAction: CaseReducer<
  DailyTaskState,
  PayloadAction<{ type: TaskType; task: TaskDailyForm }>
> = (state, action) => {
  const { type, task } = action.payload
  switch (type) {
    case TASK_TYPE.TODAY_PLAN:
      state.dataForm.groupTask.todayPlans.push(task)
      break
    case TASK_TYPE.ACTUAL:
      state.dataForm.groupTask.actual.push(task)
      break
    case TASK_TYPE.NEXT_DAY_PLAN:
      state.dataForm.groupTask.nextDayPlans.push(task)
      break
    case TASK_TYPE.ISSUE:
      state.dataForm.groupTask.issue.push(task)
      break
    default:
      break
  }
}

const editTaskAction: CaseReducer<
  DailyTaskState,
  PayloadAction<{ type: TaskType; index: number; task: TaskDailyForm }>
> = (state, action) => {
  const { type, task, index } = action.payload
  switch (type) {
    case TASK_TYPE.TODAY_PLAN:
      state.dataForm.groupTask.todayPlans[index] = task
      break
    case TASK_TYPE.ACTUAL:
      state.dataForm.groupTask.actual[index] = task
      break
    case TASK_TYPE.NEXT_DAY_PLAN:
      state.dataForm.groupTask.nextDayPlans[index] = task
      break
    case TASK_TYPE.ISSUE:
      state.dataForm.groupTask.issue[index] = task
      break
    default:
      break
  }
}

const deleteTaskAction: CaseReducer<
  DailyTaskState,
  PayloadAction<{ task: TaskDailyForm; index: number }>
> = (state, action) => {
  const { task, index } = action.payload
  switch (task.type) {
    case TASK_TYPE.TODAY_PLAN:
      state.dataForm.groupTask.todayPlans.splice(index, 1)
      break
    case TASK_TYPE.ACTUAL:
      state.dataForm.groupTask.actual.splice(index, 1)
      break
    case TASK_TYPE.NEXT_DAY_PLAN:
      state.dataForm.groupTask.nextDayPlans.splice(index, 1)
      break
    case TASK_TYPE.ISSUE:
      state.dataForm.groupTask.issue.splice(index, 1)
      break
    default:
      break
  }
}

const dailyTaskSlice = createSlice({
  name: 'dailyTaskSlice',
  initialState,
  reducers: {
    setDailyReport: setDailyReportAction,
    setHeadingStore: setHeadingAction,
    addTask: addTaskAction,
    editTask: editTaskAction,
    deleteTask: deleteTaskAction
  }
})

const { actions, reducer } = dailyTaskSlice

export const { setDailyReport, setHeadingStore, addTask, editTask, deleteTask } = actions

export default reducer

export const selectDailyTaskDataForm = (state: RootState) =>
  state.dailyTask.dataForm
