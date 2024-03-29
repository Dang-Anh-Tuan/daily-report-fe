export const GROUP_TASK_NAME_HEADER: { [key: string]: string } = {
  todayPlans: "Today's plan:",
  actual: 'Actual plan:',
  nextDayPlans: 'Next-day plan:',
  issue: 'Issue:'
}

export const TASK_TYPE = {
  TODAY_PLAN: 1,
  ACTUAL: 2,
  NEXT_DAY_PLAN: 3,
  ISSUE: 4
} as const

export type TaskType = (typeof TASK_TYPE)[keyof typeof TASK_TYPE]

export const GROUP_TASK_TYPE: { [key: string]: TaskType } = {
  todayPlans: TASK_TYPE.TODAY_PLAN,
  actual: TASK_TYPE.ACTUAL,
  nextDayPlans: TASK_TYPE.NEXT_DAY_PLAN,
  issue: TASK_TYPE.ISSUE
}
