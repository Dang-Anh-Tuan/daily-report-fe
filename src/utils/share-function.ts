import { DailyFormData, TaskDailyForm } from '@type/form-daily'

export const setTextToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    console.log('Text copied to clipboard:', text)
  } catch (error) {
    console.error('Error copying text to clipboard:', error)
  }
}

const renderTaskToText = function (
  tasks: TaskDailyForm[],
  isShowPercent?: boolean
) {
  if (tasks.length === 0) return 'N/A'
  return tasks
    .map(
      (task) =>
        `- ${task.content}${isShowPercent ? ' ( ' + task.percent + ' % )' : ''} `
    )
    .join('\n')
}

export const convertReportToText = (report: DailyFormData) => {
  return `
${report.heading ?? ''}
■ Today's plan:
${renderTaskToText(report.groupTask.todayPlans)}
■ Actual plan:
${renderTaskToText(report.groupTask.actual, true)}
■ Next-day plan:
${renderTaskToText(report.groupTask.nextDayPlans)}
■ Issue:
${renderTaskToText(report.groupTask.issue)}
  `
}

export const trimZeroStartAtNumber = (value: string) => {
  return parseInt(value, 10).toString().replace(/^0+/, '')
}
