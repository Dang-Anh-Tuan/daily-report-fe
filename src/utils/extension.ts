export const etsShowNotify = (data: {
  title: string
  message: string
  type?: any
  iconUrl?: string
  silent?: boolean
}) => {
  if ('Notification' in window) {
    if (Notification.permission === 'granted') {
      new Notification(data.title, { body: data.message })
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification(data.title, { body: data.message })
        }
      })
    }
  }
}
