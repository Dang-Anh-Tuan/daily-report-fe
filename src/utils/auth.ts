export const removeLocalToken = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
}

export const saveLocalToken = (accessToken: string, refreshToken: string) => {
  localStorage.setItem('access_token', accessToken)
  localStorage.setItem('refresh_token', refreshToken)
}
