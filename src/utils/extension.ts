function randomIdNotify() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';

  while (randomString.length < length) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomCharacter = characters.charAt(randomIndex);
    const timestamp = Date.now().toString();

    randomString += randomCharacter + timestamp;
  }

  return randomString.slice(0, length);
}

export const etsShowNotify = (data: {
  title: string
  message: string
  type?: any
  iconUrl?: string
  silent?: boolean
}) => {
  if (chrome && chrome.notifications) {
    chrome.notifications.create(
      randomIdNotify(),
      {
        title: data.title,
        message: data.title,
        iconUrl: 'logo-extension.png',
        type: 'basic',
        priority: 1
      },
      () => {}
    )
  }
}
