import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export interface SystemSliceState {
  loading: boolean
}

const initialState: SystemSliceState = {
  loading: false
}

const setLoadingAction: CaseReducer<
  SystemSliceState,
  PayloadAction<boolean>
> = (state, action) => {
  state.loading = action.payload
}

export const systemSlice = createSlice({
  name: 'systemSlice',
  initialState,
  reducers: {
    setLoading: setLoadingAction
  }
})

const { actions, reducer } = systemSlice

export const { setLoading } = actions

export default reducer

export const selectLoading = (state: RootState) => state.system.loading
