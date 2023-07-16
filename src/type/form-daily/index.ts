import { TaskType } from '@constants/dataForm'

export interface TaskDailyForm {
  id: number | null
  createdAt?: string
  updatedAt?: string
  deletedAt?: any
  content: string
  percent?: number
  type: TaskType
  link: null | string
}

export interface GroupTasks {
  todayPlans: TaskDailyForm[]
  actual: TaskDailyForm[]
  nextDayPlans: TaskDailyForm[]
  issue: TaskDailyForm[]
}

export interface DailyFormData {
  id: number | null
  createdAt: string | null
  updatedAt: string | null
  deletedAt: any | null
  heading: string
  groupTask: GroupTasks
}

export interface RequestUpdateReport {
  id: number
  data: {
    data: {
      heading: string
    }
  }
}

export interface TaskUpdate extends TaskDailyForm {
  idReport: number | null
}

export interface TaskCreate {
  content: string
  percent?: number
  type: TaskType
  idReport: number | null
  link: null | string
}

export type keyGroupTask = 'todayPlans' | 'actual' | 'nextDayPlans' | 'issue'
