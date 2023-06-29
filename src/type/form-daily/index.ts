export interface TaskDailyForm {
  id: string
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
  header: string
  groupTask: GroupTasks
}

export type keyGroupTask = 'todayPlans' | 'actual' | 'nextDayPlans' | 'issue'
