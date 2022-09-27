export interface IProduct {
  id: number | string
  name: string
  image?: string
  price: number
  count?: number
  description?: string
  reviews?: IReview[]
  discount?: number
  link: string
}

export interface IReview {
  id: number | string
  author_id: number | string
  rating: number
  text?: string
}
