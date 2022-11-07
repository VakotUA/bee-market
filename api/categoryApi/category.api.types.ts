import { ICategory } from '../../modules/models/Category'
import { IProduct } from '../../modules/models/Product'

export interface AllCategoriesQuery {
  success: boolean
  data: ICategory[]
}

export interface IBaseQuery {
  success: boolean
  data: IProduct[]
}
