import authReducer from '@redux/slices/auth/authSlice'
import dailyTaskReducer from '@redux/slices/daily-task/dailyTaskSlice'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { authApi } from './slices/auth/authApiSlice'
import { userApi } from './slices/auth/userApiSlice'

const reducer = {
  auth: authReducer,
  dailyTask: dailyTaskReducer,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer
}

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
      .concat(authApi.middleware)
      .concat(userApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
