import { IUser } from '../../modules/models/User'
export type { IUser }

export interface BaseQuery {
  success: boolean
  data: IUser
}

export interface AllUsersQuery {
  success: boolean
  data: IUser[]
}

export interface ISignUpData {
  name: string
  email: string
  password: string
}
