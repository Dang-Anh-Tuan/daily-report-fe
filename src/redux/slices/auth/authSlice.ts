import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User } from '@type/user'
import { RootState } from '../../store'

export interface AuthSliceState {
  user: User | null | undefined
  token: string | null | undefined
}

const initialState: AuthSliceState = {
  user: null,
  token: null
}

const setUserAction: CaseReducer<
  AuthSliceState,
  PayloadAction<User | null | undefined>
> = (state, action) => {
  state.user = action.payload
}

const setTokenAction: CaseReducer<
  AuthSliceState,
  PayloadAction<string | null | undefined>
> = (state, action) => {
  state.token = action.payload
}

const setCredentialsAction: CaseReducer<
  AuthSliceState,
  PayloadAction<AuthSliceState>
> = (state, action) => {
  const { user, token } = action.payload
  state.user = user
  state.token = token
}

const logoutAction: CaseReducer<AuthSliceState> = (state) => {
  state.user = null
  state.token = null
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUser: setUserAction,
    setToken: setTokenAction,
    setCredentials: setCredentialsAction,
    logout: logoutAction
  }
})

const { actions, reducer } = authSlice

export const { setUser, setCredentials, logout, setToken } = actions

export default reducer

export const selectToken = (state: RootState) => state.auth.token
export const selectUser = (state: RootState) => state.auth.user

