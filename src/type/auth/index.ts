export interface FormLogin {
  token: string
}

export interface ResponseLogin {
  accessToken: string
  refreshToken: string
  expires_in: number
}

export interface ResponseGetUser {
  id: number
  createdAt: string
  updatedAt: string
  deletedAt: string | null
  email: string
  avatar: string
  employeeId: string | null
  department: string | null
}
