import { IUser } from '../../modules/models/User'

export interface IBaseQuery {
  success: boolean
  data: IUser
}

export interface ILoginData {
  name: string
  email: string
  password: string
}
