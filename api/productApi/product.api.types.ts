import { IProduct } from '../../modules/models/Product'

export interface IBaseQuery {
  success: boolean
  data: IProduct
}

export interface IAllProductsQuery {
  success: boolean
  data: IProduct[]
}
