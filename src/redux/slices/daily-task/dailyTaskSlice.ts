import { createSlice } from '@reduxjs/toolkit'
import { DailyFormData } from '@type/form-daily'
import { RootState } from '@redux/store'

interface DailyTaskState {
  dataForm: DailyFormData
}

const initialState: DailyTaskState = {
  dataForm: {
    header: `Daily Report – 28/6 – Tuanda2`,
    groupTask: {
      todayPlans: [
        {
          id: '1',
          content: 'Study Redux RTK 1'
        },
        {
          id: '2',
          content: 'Study Redux RTK 2'
        },
        {
          id: '3',
          content: 'Study Redux RTK 3'
        }
      ],
      actual: [
        {
          id: '1',
          content: 'Study Redux RTK 1',
          percent: 12
        },
        {
          id: '2',
          content: 'Study Redux RTK 2',
          percent: 50
        },
        {
          id: '3',
          content: 'Study Redux RTK 3',
          percent: 100
        }
      ],
      nextDayPlans: [
        {
          id: '1',
          content: 'Study Redux RTK 1'
        },
        {
          id: '2',
          content: 'Study Redux RTK 2'
        },
        {
          id: '3',
          content: 'Study Redux RTK 3'
        }
      ],
      issue: []
    }
  }
}

const dailyTaskSlice = createSlice({
  name: 'dailyTaskSlice',
  initialState,
  reducers: {}
})

const { reducer } = dailyTaskSlice

export default reducer

export const selectDailyTaskDataForm = (state: RootState) => state.dailyTask.dataForm
