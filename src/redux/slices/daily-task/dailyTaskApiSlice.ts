import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from '@api/apiSlice'
import { DailyFormData, RequestUpdateReport } from '@type/form-daily'

export const dailyReportApi = createApi({
  reducerPath: 'dailyReportApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getNearestReport: builder.query<DailyFormData, number>({
      query: (idUser) => `/daily-report/current/${idUser}`
    }),
    updateReport: builder.mutation<void, RequestUpdateReport>({
      query: (payload) => ({
        url: `/daily-report/update/${payload.id}`,
        method: 'PUT',
        body: payload.data
      })
    })
  })
})

export const {
  useGetNearestReportQuery,
  useLazyGetNearestReportQuery,
  useUpdateReportMutation
} = dailyReportApi
