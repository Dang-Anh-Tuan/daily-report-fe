import { baseQueryWithReauth } from '@api/apiSlice'
import { createApi } from '@reduxjs/toolkit/query/react'
import { TaskCreate, TaskUpdate } from '@type/form-daily'

export const taskApi = createApi({
  reducerPath: 'tasktApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    createTask: builder.mutation<any, TaskCreate>({
      query: (payload) => ({
        url: `/task`,
        method: 'POST',
        body: payload
      })
    }),
    updateTask: builder.mutation<any, TaskUpdate>({
      query: (payload) => ({
        url: `/task`,
        method: 'PUT',
        body: payload
      })
    }),
    deleteTask: builder.mutation<any, number>({
      query: (id) => ({
        url: `/task/${id}`,
        method: 'DELETE'
      })
    })
  })
})

export const {
  useUpdateTaskMutation,
  useCreateTaskMutation,
  useDeleteTaskMutation
} = taskApi
