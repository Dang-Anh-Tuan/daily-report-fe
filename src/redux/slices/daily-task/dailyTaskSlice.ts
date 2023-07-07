import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { DailyFormData } from '@type/form-daily'
import { RootState } from '@redux/store'

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

const setHeadingAction: CaseReducer<
  DailyTaskState,
  PayloadAction<string>
> = (state, action) => {
  state.dataForm.heading = action.payload
}

const dailyTaskSlice = createSlice({
  name: 'dailyTaskSlice',
  initialState,
  reducers: {
    setDailyReport: setDailyReportAction,
    setHeadingStore: setHeadingAction
  }
})

const { actions, reducer } = dailyTaskSlice

export const { setDailyReport, setHeadingStore} = actions

export default reducer

export const selectDailyTaskDataForm = (state: RootState) =>
  state.dailyTask.dataForm
