import { IDetails, IProduct } from '../../modules/models/Product'

export interface IBaseQuery {
  success: boolean
  data: IDetails
}

export interface AllProductsQuery {
  success: boolean
  data: IProduct[]
}
