export interface TaskDailyForm {
  id: number
  createdAt?: string
  updatedAt?: string
  deletedAt?: any
  content: string
  percent?: number
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

export type keyGroupTask = 'todayPlans' | 'actual' | 'nextDayPlans' | 'issue'
