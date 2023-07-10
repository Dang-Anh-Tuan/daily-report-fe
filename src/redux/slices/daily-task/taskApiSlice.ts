import { baseQueryWithReauth } from '@api/apiSlice'
import { createApi } from '@reduxjs/toolkit/query/react'
import { TaskCreate, TaskUpdate } from '@type/form-daily'

export const taskApi = createApi({
  reducerPath: 'tasktApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    createTask: builder.mutation<void, TaskCreate>({
      query: (payload) => ({
        url: `/task`,
        method: 'POST',
        body: payload
      })
    }),
    updateTask: builder.mutation<void, TaskUpdate>({
      query: (payload) => ({
        url: `/task`,
        method: 'PUT',
        body: payload
      })
    })
  })
})

export const { useUpdateTaskMutation, useCreateTaskMutation } = taskApi
