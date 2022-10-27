export interface IProduct {
  id: number | string
  name: string
  image?: string
  price: number
  count?: number
  description?: IDescription
  reviews?: IReview[]
  discount?: number
}

export interface IDescription {}

export interface IReview {
  id: number | string
  author_id: number | string
  rating: number
  text?: string
}
