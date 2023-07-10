import authReducer from '@redux/slices/auth/authSlice'
import dailyTaskReducer from '@redux/slices/daily-task/dailyTaskSlice'
import systemTaskReducer from '@redux/slices/system/systemSlice'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { authApi } from './slices/auth/authApiSlice'
import { userApi } from './slices/auth/userApiSlice'
import { dailyReportApi } from './slices/daily-task/dailyTaskApiSlice'
import { taskApi } from './slices/daily-task/taskApiSlice'

const reducer = {
  auth: authReducer,
  dailyTask: dailyTaskReducer,
  system: systemTaskReducer,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [dailyReportApi.reducerPath]: dailyReportApi.reducer,
  [taskApi.reducerPath]: taskApi.reducer
}

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
      .concat(authApi.middleware)
      .concat(userApi.middleware)
      .concat(dailyReportApi.middleware)
      .concat(taskApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
